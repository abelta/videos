import './NavigationMenu.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MenuItem = ({ icon, title, url }) => {
  return (
    <Link to={url} className="menu--container">
      {icon}
      <p className="menu--item">{title}</p>
    </Link>
  )
}

MenuItem.propTypes = {
  icon: PropTypes.func,
  title: PropTypes.string,
  url: PropTypes.string,
}

export default MenuItem
