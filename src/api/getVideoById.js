export default async id => {
  const res = await fetch(`/video/${id}`)
  const video = await res.json()
  return video
}
