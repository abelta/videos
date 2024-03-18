import PropTypes from 'prop-types'

const CommentsSection = ({ style }) => {
  return <h1 style={style}>Comments</h1>
}

CommentsSection.propTypes = {
  style: PropTypes.object,
}

export default CommentsSection
