import { VideoPanel } from 'components'
import { useVideo } from 'hooks'
import { useParams } from 'react-router-dom'

const Video = () => {
  const { id } = useParams()
  const { data, status, error } = useVideo(id)

  if (status === 'pending') {
    return <div>Loading...</div>
  }
  if (status === 'error') {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <VideoPanel
        style={{ padding: '16px' }}
        thumbnail={data.thumbnail}
        title={data.title}
        author={{
          avatar: data.author.avatar,
          username: data.author.username,
          subscribers: data.author.subscriberNumber,
        }}
        likes={data.likes}
      />
      {/* video panel info */}
    </>
  )
}

export default Video
