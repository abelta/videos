import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useState } from 'react'

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

const NavigationTop = ({ isLogged, setMenuOpen }) => {
  const { isMobile } = useBreakPoint()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChangeForm = e => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })
  }

  const loginUser = async credentials => {
    return fetch('/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await loginUser(form)

    console.log(response)

    if (response.status === 200) {
      setIsModalOpen(false)
    }
  }

  return (
    <>
      <nav className="navigation-top">
        <div className="navigation-top-left">
          <Button variant="clear" onClick={setMenuOpen}>
            <IconBurger />
          </Button>
          <div className="navigation-logo">
            <Link>
              <LogoYT />
            </Link>
          </div>
        </div>
        <div className="navigation-top-center">
          <SearchInput />
          {!isMobile && isLogged && (
            <Button variant="shadow">
              <IconVoice />
            </Button>
          )}
        </div>
        <div className="navigation-top-right">
          {isLogged && (
            <Button variant="clear">
              <IconCreate />
            </Button>
          )}
          {!isLogged && (
            <Button>
              <IconKebab />
            </Button>
          )}
          {!isMobile && isLogged && (
            <Button variant="clear">
              <IconNotification />
            </Button>
          )}
          {!isLogged ? (
            <Button
              icon={<IconUser />}
              variant="outlined"
              onClick={() => setIsModalOpen(true)}
            >
              <span>Inicio sesión</span>
            </Button>
          ) : (
            <Avatar />
          )}
        </div>
      </nav>
      {isModalOpen && (
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: '#000000',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: '500px',
              height: '500px',
              background: 'white',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: ' column',
            }}
          >
            <form onSubmit={handleSubmit}>
              <input type="text" name="email" onChange={handleChangeForm} />
              <input
                type="password"
                name="password"
                onChange={handleChangeForm}
              />
              <input type="submit" value="Enviar" />
            </form>
          </div>
        </div>
      )}
    </>
  )
}

NavigationTop.propTypes = {
  isLogged: PropTypes.bool,
  setMenuOpen: PropTypes.func,
}

export default NavigationTop
