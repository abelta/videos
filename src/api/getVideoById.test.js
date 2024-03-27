import { getVideoById } from 'api'

describe('getVideoById', () => {
  let result

  beforeEach(async () => {
    result = await getVideoById('id')
  })

  it('returns an object', () => {
    expect(result).toBeInstanceOf(Object)
  })

  it('returns an object with format', () => {
    expect(result).toHaveProperty('id')
    expect(result).toHaveProperty('title')
    expect(result).toHaveProperty('description')
    expect(result).toHaveProperty('views')
    expect(result).toHaveProperty('thumbnail')
    expect(result).toHaveProperty('timestamp')
    expect(result).toHaveProperty('author')
    expect(result).toHaveProperty('likes')
  })
})
