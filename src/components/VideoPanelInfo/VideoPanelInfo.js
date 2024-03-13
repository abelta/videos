import { React, useState } from 'react'
import { useBreakPoint } from 'hooks'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import { formatCompactNumber } from 'utils'
import { AboutIcon, VideoIcon } from './Icons'

const VideoPanelInfo = ({ video, author }) => {
  const [showFullDescription, setShowFullDescription] = useState(false)
  const { isMobile, isMobileLarge } = useBreakPoint()
  const isMobileView = isMobile || isMobileLarge

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription)
  }

  // const getLastWordBeforeMore = () => {
  //   const words = video.description.split(' ')
  //   const sliceLength = isMobile ? 100 : 500
  //   const truncatedWords = words.slice(0, sliceLength)
  //   const lastWord = truncatedWords[truncatedWords.length - 1]
  //   return lastWord
  // }

  return (
    <div style={{ background: '#dbdbdb', borderRadius: '10px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          margin: '10px 10px 0 10px',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        <span style={{ margin: '10px 10px 5px 10px' }}>
          {video.views} views
        </span>
        <span style={{ margin: '10px 10px 5px 10px' }}>
          {formatDistanceToNow(video.timestamp)}
        </span>
      </div>
      <div style={{ padding: '10px' }}>
        <span style={{ margin: '10px' }}>
          {' '}
          {showFullDescription ? (
            <>
              {video.description}
              <div style={{ display: 'flex', margin: '20px 10px 20px auto' }}>
                <img
                  src={author.avatar}
                  alt=""
                  style={{
                    display: 'block',
                    height: '60px',
                    borderRadius: '50%',
                    marginRight: '12px',
                  }}
                />
                <div>
                  <a
                    style={{
                      marginBottom: '5px',
                      fontSize: '20px',
                      fontWeight: 500,
                      lineHeight: '24px',
                      color: '#0f0f0f',
                      textDecoration: 'none',
                    }}
                    href="/"
                  >
                    {author.username}
                  </a>
                  <p
                    style={{
                      marginTop: '5px',
                      fontSize: '16px',
                      lineHeight: '16px',
                      color: '#606060',
                    }}
                  >
                    {formatCompactNumber(author.subscribers)} subscribers
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', marginBottom: '40px' }}>
                <a href="/" style={{ textDecoration: 'none' }}>
                  <button
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: isMobileView ? '138px' : '400px',
                      height: '40px',
                      fontSize: '18px',
                      borderRadius: '20px',
                      marginRight: '10px',
                      background: '#dbdbdb',
                      color: 'black',
                      border: '1px solid #9b9b9b',
                      transition: 'background-color 0.3s, color 0.3s',
                    }}
                    onMouseEnter={e => {
                      e.target.style.background = '#9b9b9b'
                      e.target.style.color = 'black'
                    }}
                    onMouseLeave={e => {
                      e.target.style.background = '#dbdbdb'
                      e.target.style.color = 'black'
                    }}
                  >
                    <VideoIcon />
                    Videos
                  </button>
                </a>
                <a href="/" style={{ textDecoration: 'none' }}>
                  <button
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: isMobileView ? '138px' : '400px',
                      height: '40px',
                      fontSize: '18px',
                      borderRadius: '20px',
                      background: '#dbdbdb',
                      color: 'black',
                      border: '1px solid #9b9b9b',
                      transition: 'background-color 0.3s, color 0.3s',
                    }}
                    onMouseEnter={e => {
                      e.target.style.background = '#9b9b9b'
                      e.target.style.color = 'black'
                    }}
                    onMouseLeave={e => {
                      e.target.style.background = '#dbdbdb'
                      e.target.style.color = 'black'
                    }}
                  >
                    <AboutIcon />
                    About
                  </button>
                </a>
              </div>
            </>
          ) : (
            <>
              {video.description.slice(0, isMobileView ? 100 : 500)}
              {/* <span
                style={{
                  backgroundImage:
                    'linear-gradient(to right, transparent 80%, transparent 100%)',
                  display: 'inline-block',
                }}
              >
                {getLastWordBeforeMore()}
              </span>
              ... */}
            </>
          )}
          {video.description.length > 500 && (
            <button
              onClick={toggleDescription}
              style={{
                background: 'transparent',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              {showFullDescription ? 'Show less' : '...more'}
            </button>
          )}
        </span>
      </div>
      {showFullDescription && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '10px',
            width: '200px',
          }}
        ></div>
      )}
    </div>
  )
}

VideoPanelInfo.propTypes = {
  video: PropTypes.shape({
    description: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
  author: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    subscribers: PropTypes.number.isRequired,
  }).isRequired,
}

export default VideoPanelInfo
