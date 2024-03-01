import { useBreakPoint } from 'hooks'
import PropTypes from 'prop-types'
import Lottie from 'react-lottie'
import { capitalize, formatCompactNumber } from 'utils'
import animationData from '../../lotties/like-animation'
import { IconLikes } from 'components/NavigationMenu/Icons'
import { useState } from 'react'
import Button from 'components/Button'

const VideoPanel = ({ style, thumbnail, title, author, likes }) => {
  const { isMobile } = useBreakPoint()
  const [isLottiePaused, setIsLottiePaused] = useState(true)
  const [isLottieHidden, setIsLottieHidden] = useState(true)

  const handleClickLikes = ev => {
    ev.preventDefault()

    setIsLottiePaused(!isLottiePaused)
    setIsLottieHidden(!isLottieHidden)
  }

  const buttonLikeIcon = (
    <>
      <IconLikes opacity={isLottieHidden ? '1' : '0'} />
      {!isLottieHidden && (
        <Lottie
          isClickToPauseDisabled
          isStopped={isLottiePaused}
          isPaused={isLottiePaused}
          width={50}
          height={50}
          style={{ position: 'absolute', top: '-50%', left: '-50%' }}
          options={{ animationData, loop: false }}
        />
      )}
    </>
  )

  return (
    <div style={style}>
      <img
        src={thumbnail}
        alt=""
        style={{ display: 'block', width: '100%', borderRadius: '12px' }}
      />
      <h1 style={{ fontSize: isMobile ? '18px' : '20px' }}>
        {capitalize(title)}
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
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
            <a
              style={{
                margin: 0,
                fontSize: '16px',
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
                margin: 0,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#606060',
              }}
            >
              {formatCompactNumber(author.subscribers)} subscribers
            </p>
          </div>
        </div>
        <div>
          <Button
            style={{ borderRadius: '50px', height: '36px' }}
            variant="shadow"
            icon={buttonLikeIcon}
            onClick={handleClickLikes}
          >
            {formatCompactNumber(likes)}
          </Button>
        </div>
      </div>
    </div>
  )
}

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
