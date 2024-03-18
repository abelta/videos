import { VideoPanel, VideoPanelInfo, CommentsSection } from 'components'
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
      <VideoPanelInfo
        style={{ padding: '16px' }}
        video={{
          description: data.description,
          views: data.views,
          timestamp: data.timestamp,
        }}
        author={{
          avatar: data.author.avatar,
          username: data.author.username,
          subscribers: data.author.subscriberNumber,
        }}
      />
      <CommentsSection style={{ padding: '16px' }} />
    </>
  )
}

export default Video
