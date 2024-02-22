import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { VideoCard } from 'components'
import { useHomeVideos } from 'hooks'
import { useEffect } from 'react'

const VideosList = ({ style }) => {
  const { data, error, status, fetchNextPage, isFetchingNextPage } =
    useHomeVideos()

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  if (status === 'pending') {
    return <div>Loading...</div>
  }
  if (status === 'error') {
    return <div>Error: {error.message}</div>
  }
  return (
    <div style={style}>
      <ul>
        {data.pages.map(page => {
          return page.videos.map(video => (
            <li key={video.id}>
              <Link to={`/video/${video.id}`}>
                <VideoCard {...video} />
              </Link>
            </li>
          ))
        })}
      </ul>
      <div ref={ref} style={{ width: '100%', height: '20px' }}>
        {isFetchingNextPage && <h1>Loading more...</h1>}
      </div>
    </div>
  )
}

VideosList.propTypes = {
  style: PropTypes.object,
}

export default VideosList
