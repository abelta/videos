import { useEffect, useState } from 'react'

const App = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('/home-videos')
      .then(response => response.json())
      .then(data => setVideos(data))
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <a href={`/video/${video.id}`}>{video.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
