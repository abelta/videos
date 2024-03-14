import { useBreakPoint } from 'hooks'
import PropTypes from 'prop-types'
import Lottie from 'lottie-react'
import { capitalize, formatCompactNumber } from 'utils'
import { LikeAnimation, BellAnimation } from 'lotties'
import { IconLikes } from 'components/NavigationMenu/Icons'
import { useState } from 'react'
import Button from 'components/Button'
import IconShare from './IconShare'
import IconAdd from './IconAdd'
import IconMeatball from './IconMeatball'
import IconDislike from './IconDislike'
import IconDislikeFilled from './IconDislikeFilled'

const VideoPanel = ({ style, thumbnail, title, author, likes }) => {
  const { isMobile } = useBreakPoint()
  const [isLottieLikeHidden, setIsLottieLikeHidden] = useState(true)
  const [isDislikeActive, setIsDislikeActive] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const buttonLikeIcon = (
    <>
      <IconLikes opacity={isLottieLikeHidden ? '1' : '0'} />
      {!isLottieLikeHidden && (
        <Lottie
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '50px',
          }}
          animationData={LikeAnimation}
          loop={false}
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
      <h1 style={{ fontSize: isMobile ? '18px' : '20px', margin: '12px 0' }}>
        {capitalize(title)}
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          rowGap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
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
          <div style={{ marginRight: '24px' }}>
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
          <Button
            style={{
              borderRadius: '50px',
              height: '36px',
              color: !isSubscribed && '#ffffff',
              backgroundColor: !isSubscribed && '#0f0f0f',
              fontWeight: 500,
            }}
            variant="shadow"
            onClick={() => setIsSubscribed(!isSubscribed)}
            icon={
              isSubscribed && (
                <Lottie
                  style={{
                    width: '24px',
                    height: '24px',
                  }}
                  animationData={BellAnimation}
                  loop={false}
                />
              )
            }
          >
            {!isSubscribed ? 'Suscribirme' : 'Suscrito'}
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            columnGap: '8px',
          }}
        >
          <div style={{ display: 'flex' }}>
            <Button
              style={{ borderRadius: '50px 0 0 50px', height: '36px' }}
              variant="shadow"
              icon={buttonLikeIcon}
              onClick={() => setIsLottieLikeHidden(!isLottieLikeHidden)}
            >
              {formatCompactNumber(likes)}
            </Button>
            <Button
              style={{ borderRadius: '0 50px 50px 0', height: '36px' }}
              variant="shadow"
              onClick={() => setIsDislikeActive(!isDislikeActive)}
            >
              <div
                style={{
                  background: 'rgba(0,0,0,0.1)',
                  position: 'absolute',
                  left: '0',
                  top: '6px',
                  height: '24px',
                  width: '1px',
                }}
              />
              {isDislikeActive ? <IconDislikeFilled /> : <IconDislike />}
            </Button>
          </div>
          <Button
            style={{ borderRadius: '50px', height: '36px' }}
            variant="shadow"
            icon={<IconShare />}
          >
            Compartir
          </Button>
          <Button
            style={{ borderRadius: '50px', height: '36px' }}
            variant="shadow"
            icon={<IconAdd />}
          >
            Guardar
          </Button>
          <Button
            style={{ height: '36px', width: '36px', justifyContent: 'center' }}
            variant="shadow"
          >
            <IconMeatball />
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
