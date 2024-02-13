import './NavigationLeft.css'
import IconHome from './IconHome'
import IconShorts from './IconShorts'
import IconSuscriptions from './IconSuscriptions'
import { Link } from 'react-router-dom'

const NavigationLeft = () => {
  return (
    <nav>
      <Link to={'/'} className="menu--container">
        <IconHome />
        <p>Inicio</p>
      </Link>
      <Link to={'/'} className="menu--container">
        <IconShorts />
        <p>Shorts</p>
      </Link>
      <Link to={'/'} className="menu--container">
        <IconSuscriptions />
        <p>Suscripciones</p>
      </Link>
    </nav>
  )
}

export default NavigationLeft
