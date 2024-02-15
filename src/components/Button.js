import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ children, icon, variant = 'default', onClick }) => (
  <button className={`button button-${variant}`} onClick={onClick}>
    {icon && icon}
    <span>{children}</span>
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  variant: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
