const getHomeVideos = async ({ page = 0 }) => {
  const res = await fetch(`/home-videos?page=${page}`)
  const videos = await res.json()
  return {
    videos,
    currentPage: page,
    nextPage: page + 1,
  }
}

export default getHomeVideos
