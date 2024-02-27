import { Outlet } from 'react-router-dom'
import { NavigationTop, NavigationMenu } from 'components'

const App = () => {
  return (
    <div>
      <header>
        <NavigationTop />
        <NavigationMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
