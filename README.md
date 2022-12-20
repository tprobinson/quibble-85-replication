# quibble-85-replication

Run `yarn test` to replicate the issue:
```
  1) equivalency
       "before each" hook for "will mock successfully":
     SyntaxError: Unexpected token 'default'
      at ESMLoader.moduleStrategy (node:internal/modules/esm/translators:119:18)
      at ESMLoader.moduleProvider (node:internal/modules/esm/loader:468:14)
```

Switching line 9 and 10 in test/basic.test.ts does not cause the issue.
