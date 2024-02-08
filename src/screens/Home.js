import { Link } from 'react-router-dom'
import { useHomeVideos } from 'hooks'

const Home = () => {
  const { isPending, error, data } = useHomeVideos()

  if (isPending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <main>
      <h1>HOME</h1>
      <ul>
        {data.map(video => (
          <li key={video.id}>
            <Link to={`/video/${video.id}`}>{video.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
