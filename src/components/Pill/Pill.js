import PropTypes from 'prop-types'

const Pill = ({ children, style }) => (
  <span
    style={{
      height: '24px',
      padding: '4px 14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      backgroundColor: '#f2f2f2',
      borderRadius: '8px',
      fontFamily: 'Roboto, Arial, sans-serif',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 'bold',
      textTransform: 'capitalize',
      ...style,
    }}
  >
    {children}
  </span>
)

Pill.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}

export default Pill
