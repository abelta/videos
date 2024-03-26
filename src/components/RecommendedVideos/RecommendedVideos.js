import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { RecommendationCard } from 'components'
import { useHomeVideos } from 'hooks'

const RecommendedVideos = ({ style }) => {
  const { data, error, status } = useHomeVideos()

  if (status === 'pending') {
    return <div>Loading...</div>
  }
  if (status === 'error') {
    return <div>Error: {error.message}</div>
  }
  return (
    <>
      <ul style={{ listStyle: 'none', padding: '0', marginTop: '15px' }}>
        {data.pages.map(page => {
          return page.videos.map(video => (
            <li
              key={video.id}
              style={{ listStyle: 'none', marginBottom: '16px' }}
            >
              <Link
                to={`/video/${video.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <RecommendationCard {...video} />
              </Link>
            </li>
          ))
        })}
      </ul>
    </>
  )
}

RecommendedVideos.propTypes = {
  style: PropTypes.object,
}

export default RecommendedVideos
