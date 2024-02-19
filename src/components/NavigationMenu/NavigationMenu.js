import './NavigationMenu.css'
import React from 'react'
import {
  menuItems,
  menuItemsMobile,
  menuItemsYou,
  menuItemsExplore,
  menuItemsSettings,
} from './MenuInfo'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'
import { useBreakPoint } from 'hooks'

const NavigationMenu = () => {
  const { isMobile, isMobileLarge } = useBreakPoint()

  if (isMobile || isMobileLarge) {
    return (
      <nav className="navbar--left">
        <div className="navbar--wrapper">
          {menuItemsMobile.map((menuItem, index) => (
            <MenuItem key={index} menuItem={menuItem} />
          ))}
        </div>
      </nav>
    )
  }

  return (
    <nav className="navbar--left">
      <div className="navbar--wrapper">
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
      </div>
    </nav>
  )
}

export default NavigationMenu
