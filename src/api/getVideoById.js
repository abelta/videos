const getVideoById = async id => {
  const res = await fetch(`/video/${id}`)
  const video = await res.json()
  return video
}

export default getVideoById
