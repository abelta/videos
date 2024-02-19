import './NavigationMenu.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MenuItem = ({ menuItem }) => {
  return (
    <Link to={menuItem.link} className="menu--container">
      {menuItem.icon}
      <p className="menu--item">{menuItem.title}</p>
    </Link>
  )
}

MenuItem.propTypes = {
  menuItem: PropTypes.object,
}

export default MenuItem
