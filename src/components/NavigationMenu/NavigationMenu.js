import './NavigationMenu.css'
import {
  menuItems,
  menuItemsYou,
  menuItemsExplore,
  menuItemsSettings,
} from './MenuInfo'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'

const NavigationMenu = () => {
  return (
    <nav className="navbar--left">
      {menuItems.map((menuItem, index) => (
        <MenuItem key={index} menuItem={menuItem} />
      ))}
      <div className="nav--container">
        <Link to={'/'} className="nav--subtitle">
          Tú
        </Link>
        {menuItemsYou.map((menuItem, index) => (
          <MenuItem key={index} menuItem={menuItem} />
        ))}
      </div>
      <div className="nav--container">
        <Link to={'/'} className="nav--subtitle">
          Explorar
        </Link>
        {menuItemsExplore.map((menuItem, index) => (
          <MenuItem key={index} menuItem={menuItem} />
        ))}
      </div>
      <div className="nav--container">
        {menuItemsSettings.map((menuItem, index) => (
          <MenuItem key={index} menuItem={menuItem} />
        ))}
      </div>
    </nav>
  )
}

export default NavigationMenu
