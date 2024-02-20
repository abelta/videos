import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

const VideoCard = ({ thumbnail, title, author, views, timestamp }) => (
  <article style={{ width: '100%' }}>
    <img
      src={thumbnail}
      alt={title}
      style={{ borderRadius: '12px', width: '100%' }}
    />
    <div style={{ display: 'flex' }}>
      <p>
        <img
          src={author.avatar}
          style={{ height: '36px', borderRadius: '50%', marginRight: '12px' }}
        />
      </p>
      <div style={{ paddingRight: '24px', width: '100%' }}>
        <p>{title}</p>
        <p>{author.username}</p>
        <p>
          <span>{views} views</span>
          <span>{formatDistanceToNow(timestamp)} ago</span>
        </p>
      </div>
    </div>
  </article>
)

VideoCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  author: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
}

export default VideoCard
