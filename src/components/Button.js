import PropTypes from 'prop-types'
import './Button.css'

const BUTTON_VARIANTS = ['clear', 'shadow', 'outlined']

const Button = ({
  children,
  icon,
  variant = BUTTON_VARIANTS[0],
  onClick,
  style,
  ariaLabel,
}) => (
  <button
    className={`button button-${variant}`}
    style={style}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {icon && (
      <div
        style={{ position: 'relative', marginRight: '4px', display: 'flex' }}
      >
        {icon}
      </div>
    )}
    <span style={{ display: 'flex' }}>{children}</span>
  </button>
)

Button.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.object,
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
}

export default Button
