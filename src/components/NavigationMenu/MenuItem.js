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
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default MenuItem
