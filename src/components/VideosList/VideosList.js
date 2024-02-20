import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { VideoCard } from 'components'
import { useHomeVideos } from 'hooks'
import { useEffect } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

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
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 320: 1, 588: 2, 874: 3, 1160: 4 }}
        style={{ margin: '0 16px' }}
      >
        <Masonry gutter="16px">
          {data.pages.map(page => {
            return page.videos.map(video => (
              <li key={video.id} style={{ listStyle: 'none', height: '400px' }}>
                <Link
                  to={`/video/${video.id}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <VideoCard {...video} />
                </Link>
              </li>
            ))
          })}
        </Masonry>
      </ResponsiveMasonry>
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
