import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavigationTop, NavigationMenu } from 'components'

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(
    localStorage.getItem('isMenuOpen') === 'true' || false,
  )

  useEffect(() => {
    localStorage.setItem('isMenuOpen', isMenuOpen)
  }, [isMenuOpen])

  return (
    <>
      <NavigationTop
        ariaLabel="navigation-menu-top"
        setMenuOpen={() => setMenuOpen(!isMenuOpen)}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}
      />

      <NavigationMenu
        ariaLabel="navigation-menu-sidebar-left"
        isOpen={isMenuOpen}
        style={{
          position: 'fixed',
          top: '58px',
          left: 0,
          width: isMenuOpen ? '250px' : '100px',
          transition: '0.25s all',
          overflowY: 'scroll',
          height: 'calc(100% - 58px)',
        }}
      />
      <main
        style={{
          top: '58px',
          position: 'fixed',
          height: 'calc(100% - 58px)',
          transition: '0.25s all',
          left: isMenuOpen ? '250px' : '100px',
          overflowY: 'scroll',
          width: `calc(100% - ${isMenuOpen ? '250px' : '100px'})`,
        }}
      >
        <Outlet />
      </main>
    </>
  )
}

export default App
