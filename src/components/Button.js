import PropTypes from 'prop-types'
import './Button.css'

const BUTTON_VARIANTS = ['clear', 'shadow', 'outlined']

const Button = ({ children, icon, variant = BUTTON_VARIANTS[0], onClick }) => (
  <button className={`button button-${variant}`} onClick={onClick}>
    {icon && icon}
    <span>{children}</span>
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  onClick: PropTypes.func
}

export default Button
