import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

const VideoPanelInfo = ({ video }) => {
  const [showFullDescription, setShowFullDescription] = useState(false)

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription)
  }

  return (
    <div style={{ background: 'lightgrey', borderRadius: '5px' }}>
      <div
        style={{
          width: '200px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '10px',
        }}
      >
        <p>{video.views} views</p>
        <p>{formatDistanceToNow(video.timestamp)}</p>
      </div>
      <p>
        {' '}
        {showFullDescription
          ? video.description
          : `${video.description.slice(0, 1000)}... `}
        {video.description.length > 1000 && (
          <button
            onClick={toggleDescription}
            style={{ background: 'transparent', border: 'none' }}
          >
            {showFullDescription ? 'Show less' : '...more'}
          </button>
        )}
      </p>
    </div>
  )
}

VideoPanelInfo.propTypes = {
  video: PropTypes.shape({
    description: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    timestamp: PropTypes.number.isRequired,
  }).isRequired,
}

export default VideoPanelInfo
