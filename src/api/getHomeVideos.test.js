import { getHomeVideos } from 'api'

describe('getHomeVideos', () => {
  let result

  beforeAll(async () => {
    result = await getHomeVideos({ page: 0 })
  })

  test('returns an object with keys "videos", "currentPage" and "nextPage"', () => {
    expect(result).toBeInstanceOf(Object)
    expect(result).toHaveProperty('videos')
    expect(result).toHaveProperty('currentPage')
    expect(result).toHaveProperty('nextPage')
  })

  test('videos is an array of objects', () => {
    expect(typeof result.videos[0]).toBe('object')
  })

  test('video objects have expected properties', () => {
    expect(result.videos[0]).toHaveProperty('id')
    expect(result.videos[0]).toHaveProperty('title')
    expect(result.videos[0]).toHaveProperty('description')
    expect(result.videos[0]).toHaveProperty('views')
    expect(result.videos[0]).toHaveProperty('thumbnail')
    expect(result.videos[0]).toHaveProperty('timestamp')
    expect(result.videos[0]).toHaveProperty('author')
    expect(result.videos[0]).toHaveProperty('likes')
  })

  test('current page matches the page parameter passed', () => {
    expect(result.currentPage).toBe(0)
  })

  test('nextPage is one more than current page', () => {
    expect(result.nextPage).toBe(result.currentPage + 1)
  })

  test.skip('handles errors properly', async () => {
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.reject(new Error('Fetch failed')))

    await expect(getHomeVideos()).rejects.toThrow('Fetch failed')

    global.fetch.mockRestore()
  })
})
