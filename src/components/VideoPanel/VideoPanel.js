import PropTypes from 'prop-types'
import { capitalize, formatCompactNumber } from 'utils'

const VideoPanel = ({ style, thumbnail, title, author, likes }) => (
  <div style={style}>
    <img
      src={thumbnail}
      alt=""
      style={{ display: 'block', width: '100%', borderRadius: '12px' }}
    />
    <h1 style={{ fontSize: '18px' }}>{capitalize(title)}</h1>
    <div>
      <div style={{ display: 'flex' }}>
        <img
          src={author.avatar}
          alt=""
          style={{
            display: 'block',
            height: '40px',
            borderRadius: '50%',
            marginRight: '12px',
          }}
        />
        <div>
          <p style={{ margin: 0, fontSize: '16px' }}>{author.username}</p>
          <p style={{ margin: 0, fontSize: '12px' }}>
            {formatCompactNumber(author.subscribers)} subscribers
          </p>
        </div>
      </div>
      <div>{formatCompactNumber(likes)}</div>
    </div>
  </div>
)

VideoPanel.propTypes = {
  style: PropTypes.object,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    subscribers: PropTypes.number.isRequired,
  }).isRequired,
  likes: PropTypes.number.isRequired,
}

export default VideoPanel
