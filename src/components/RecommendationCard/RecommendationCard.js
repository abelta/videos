import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import { capitalize, formatCompactNumber } from 'utils'

const shortenTitle = title => {
  const words = title.split(' ')
  if (words.length > 8) {
    return words.slice(0, 8).join(' ') + '...'
  }
  return title
}

const RecommendationCard = ({ thumbnail, title, author, views, timestamp }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '450px',
        marginRight: '20px',
        padding: '0',
      }}
    >
      <img
        src={thumbnail}
        alt={title}
        style={{
          borderRadius: '12px',
          width: '168px',
          height: '94px',
        }}
      />
      <div style={{ display: 'flex', marginTop: '12px', marginLeft: '5px' }}>
        <div style={{ paddingRight: '24px', width: '100%' }}>
          <h3
            style={{
              margin: '0 0 4px',
              fontSize: '16px',
              fontWeight: '500',
              color: '#0f0f0f',
            }}
          >
            {capitalize(shortenTitle(title))}{' '}
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
    </div>
  )
}

RecommendationCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  author: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
}

export default RecommendationCard
