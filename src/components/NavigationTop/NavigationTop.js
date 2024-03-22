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
import useLogin from 'hooks/useLogin'

const NavigationTop = ({ ariaLabel, isLogged, setMenuOpen }) => {
  const { isMobile } = useBreakPoint()
  const { mutate } = useLogin()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)

  const handleChangeForm = e => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })
  }

  const emailValidation = email => {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (!email || email.length === 0) {
      setEmailError('Email cannot be empty')
    } else if (!regEx.test(email)) {
      setEmailError('Invalid email provided')
    }

    return null
  }

  const passwordValidation = password => {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (!password || password.length === 0) {
      setPasswordError('Password cannot be empty')
    } else if (!regEx.test(password)) {
      setPasswordError('Invalid password provided')
    }

    return null
  }

  console.log(emailError, passwordError)

  const handleSubmit = async e => {
    e.preventDefault()
    const isEmailValid = emailValidation(form.email)
    const isPasswordValid = passwordValidation(form.password)
    const isFormValid = isEmailValid && isPasswordValid

    if (isFormValid) {
      await mutate(form)
    }
  }

  return (
    <>
      <nav aria-label={ariaLabel} className="navigation-top">
        <div className="navigation-top-left">
          <Button
            ariaLabel="menu-burguer"
            variant="clear"
            onClick={setMenuOpen}
          >
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
            <div>
              <div>
                <input type="text" name="email" onChange={handleChangeForm} />
                {emailError && (
                  <span style={{ color: 'red' }}>{emailError}</span>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  onChange={handleChangeForm}
                />
                {passwordError && (
                  <span style={{ color: 'red' }}>{passwordError}</span>
                )}
              </div>
              <Button onClick={handleSubmit}>Enviar</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

NavigationTop.propTypes = {
  ariaLabel: PropTypes.string,
  isLogged: PropTypes.bool,
  setMenuOpen: PropTypes.func,
}

export default NavigationTop
