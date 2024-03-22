import { getTags } from 'api'

describe('getTags', () => {
  let result

  beforeEach(async () => {
    result = await getTags()
  })

  it('returns an array of objects', () => {
    expect(result).toBeInstanceOf(Array)
    expect(result[0]).toBeInstanceOf(Object)
  })

  it('returns an array with objects with a format', () => {
    expect(result[0]).toHaveProperty('id')
    expect(result[0]).toHaveProperty('name')
  })
})
