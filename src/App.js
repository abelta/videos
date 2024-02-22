import { Link, Outlet } from 'react-router-dom'
import { NavigationTop } from 'components'
import { NavigationMenu } from 'components'

const App = () => {
  return (
    <div>
      <header>
        <NavigationTop />
        <NavigationMenu />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/video/1">Video 1</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
