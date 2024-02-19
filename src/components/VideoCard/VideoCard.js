import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

const VideoCard = ({ thumbnail, title, author, views, timestamp }) => (
  <article>
    <img src={thumbnail} alt={title} />
    <p>{title}</p>
    <p>
      <img src={author.avatar} />
    </p>
    <p>{author.username}</p>
    <p>{views} views</p>
    <p>{formatDistanceToNow(timestamp)} ago</p>
  </article>
)

VideoCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  author: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
}

export default VideoCard
