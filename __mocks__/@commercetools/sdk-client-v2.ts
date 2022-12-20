import * as namedExports from '@commercetools/sdk-client-v2'
import * as td from 'testdouble'

type MockedReturn = Awaited<ReturnType<typeof td['replaceEsm']>>

const mock = async (): Promise<MockedReturn> => {
  return await td.replaceEsm('@commercetools/sdk-client-v2', namedExports)
}

export default mock
