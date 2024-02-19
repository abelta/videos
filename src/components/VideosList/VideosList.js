import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { VideoCard } from 'components'

const VideosList = ({ videos, style }) => {
  return (
    <div style={style}>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <Link to={`/video/${video.id}`}>
              <VideoCard {...video} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

VideosList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      timestamp: PropTypes.instanceOf(Date).isRequired,
      author: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  style: PropTypes.object,
}

export default VideosList
