import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import { useMediaQuery } from 'hooks'
import { capitalize, formatCompactNumber } from 'utils'

const VideoCard = ({ thumbnail, title, author, views, timestamp }) => {
  const hasMediaQuery = useMediaQuery('(min-width: 589px)')

  return (
    <article
      style={{
        width: '100%',
        height: hasMediaQuery ? '350px' : 'auto',
      }}
    >
      <img
        src={thumbnail}
        alt={title}
        style={{ borderRadius: '12px', width: '100%' }}
      />
      <div style={{ display: 'flex', marginTop: '12px' }}>
        <img
          src={author.avatar}
          alt=""
          style={{
            display: 'block',
            height: '36px',
            borderRadius: '50%',
            marginRight: '12px',
          }}
        />
        <div style={{ paddingRight: '24px', width: '100%' }}>
          <h3
            style={{
              margin: '0 0 4px',
              fontSize: '16px',
              fontWeight: '500',
              color: '#0f0f0f',
            }}
          >
            {capitalize(title)}
          </h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#606060' }}>
            {author.username}
          </p>
          <p style={{ margin: 0, fontSize: '14px', color: '#606060' }}>
            <span>{formatCompactNumber(views)} views</span>
            <span style={{ margin: '0 4px' }}>·</span>
            <span>{formatDistanceToNow(timestamp)} ago</span>
          </p>
        </div>
      </div>
    </article>
  )
}

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
