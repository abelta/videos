import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { useBreakPoint } from 'hooks'

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
  const { isMobile } = useBreakPoint();

  return (
    <nav className='navigation-top'>
      <div className='navigation-top-left'>
        <Button variant='clear'>
          <IconBurger />
        </Button>
        <div className='navigation-logo'>
          <Link>
            <LogoYT />
          </Link>
        </div>
      </div>
      <div className='navigation-top-center'>
        <SearchInput />
        {!isMobile && isLogged &&
          <Button variant="shadow">
            <IconVoice />
          </Button>
        }
      </div>
      <div className='navigation-top-right'>
        {isLogged &&
          <Button variant="clear">
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
          <Button variant="clear">
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
