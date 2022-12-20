import * as td from 'testdouble'
import mockLibrary from '../__mocks__/lib'

describe('equivalency', () => {
  let mockedCommerceTools: Awaited<ReturnType<typeof mockLibrary>>
  let ctLib: typeof import('../lib/lib')['default']
  beforeEach(async () => {
    // reversing the order of these two lines does not cause the error
    mockedCommerceTools = await mockLibrary()
    ctLib = await import('../lib/lib').then(x => x.default)
  })

  afterEach(() => {
    td.reset()
  })

  it('will mock successfully', async () => {
    console.log(mockedCommerceTools, ctLib)
  })
})
