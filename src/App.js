import { Link, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <header>
        <h1>LAYOUT</h1>
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
