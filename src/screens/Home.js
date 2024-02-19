import { useHomeVideos } from 'hooks'
import { VideosList } from 'components'

const Home = () => {
  const { isPending, error, data } = useHomeVideos()

  if (isPending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <VideosList
        videos={data}
        style={{ backgroundColor: 'lightgrey', height: '100%', width: '100%' }}
      />
    </>
  )
}

export default Home
