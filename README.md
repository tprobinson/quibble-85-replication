# quibble-85-replication

When importing a package twice, once in order to mock it and again from some other library, the imports get confused.

Run `yarn test` to replicate the issue:
```
  1) equivalency
       "before each" hook for "will mock successfully":
     SyntaxError: Unexpected token 'default'
      at ESMLoader.moduleStrategy (node:internal/modules/esm/translators:119:18)
      at ESMLoader.moduleProvider (node:internal/modules/esm/loader:468:14)
```

Switching line 9 and 10 in test/basic.test.ts does not cause the issue.

Workaround: when mocking, filter out a property named 'default':
```js
const filteredNamedExports = Object.keys(namedExports).reduce((acc, key) => {
  if( key !== 'default' ) { acc[key] = namedExports[key] }
  return acc
}, {}) as typeof namedExports

filteredNamedExports.createClient = createClient

const mock = async (): Promise<MockedReturn> => {
  return await td.replaceEsm('moduleName', filteredNamedExports)
}
```
