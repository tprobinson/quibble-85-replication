import * as namedExports from 'dotenv'
import * as td from 'testdouble'

type MockedReturn = Awaited<ReturnType<typeof td['replaceEsm']>>

const mock = async (): Promise<MockedReturn> => {
  return await td.replaceEsm('dotenv', namedExports)
}

export default mock
