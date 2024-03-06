import PropTypes from 'prop-types'
import './Avatar.css'

const Avatar = ({ image }) => {
  return (
    <button className="button avatar">
      <div className="avatar-wrapper">
        <img
          src={
            image ||
            'https://www.paradigmadigital.com/assets/img/resize/huge/db942fec18504f9f87e48632617fb9d8.png'
          }
          alt=""
        />
      </div>
    </button>
  )
}

Avatar.propTypes = {
  image: PropTypes.string,
}

export default Avatar
