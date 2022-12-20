import * as td from 'testdouble'
import ctMock from '../__mocks__/@commercetools/sdk-client-v2'

describe('equivalency', () => {
  let mockedCommerceTools: Awaited<ReturnType<typeof ctMock>>
  let ctLib: typeof import('../lib/CommerceTools')['default']
  beforeEach(async () => {
    // reversing the order of these two lines does not cause the error
    mockedCommerceTools = await ctMock()
    ctLib = await import('../lib/CommerceTools').then(x => x.default)
  })

  afterEach(() => {
    td.reset()
  })

  it('will mock successfully', async () => {
    console.log(mockedCommerceTools, ctLib)
  })
})
