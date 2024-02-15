import PropTypes from 'prop-types'

import { useMediaQuery } from 'hooks'

import IconBurger from './IconBurger'
import IconCreate from './IconCreate'
import IconNotification from './IconNotification'
import IconVoice from './IconVoice'
import IconUser from './IconUser'
import IconKebab from './IconKebab'
import LogoYT from './LogoYT'

import SearchInput from './SearchInput'
import Avatar from './Avatar'

import Button from 'components/Button'

import './NavigationTop.css'

const NavigationTop = ({ isLogged }) => {
  const isMobile = useMediaQuery('(max-width:768px)')
  // const avatarImg = "https://www.paradigmadigital.com/assets/img/resize/huge/db942fec18504f9f87e48632617fb9d8.png"

  return (
    <nav className='navigation-top'>
      <div className='navigation-top-left'>
        <Button variant='icon'>
          <IconBurger />
        </Button>
        <div className='navigation-logo'>
          <LogoYT />
        </div>
      </div>
      <div className='navigation-top-center'>
        <SearchInput />
        {!isMobile && isLogged &&
          <Button variant="icon">
            <IconVoice />
          </Button>
        }
      </div>
      <div className='navigation-top-right'>
        {isLogged &&
          <Button variant="icon">
            <IconCreate />
          </Button>
        }
        {
          !isLogged &&
          <Button>
            <IconKebab />
          </Button>
        }
        {!isMobile && isLogged  &&
          <Button variant="icon">
            <IconNotification />
          </Button>
        }
        {!isLogged ?
          <Button icon={<IconUser/>} variant="outlined">
            <span>Inicio sesión</span>
          </Button>
          : <Avatar />
        }
      </div>
    </nav>
  )
}

NavigationTop.propTypes = {
  isLogged: PropTypes.bool
}

export default NavigationTop
