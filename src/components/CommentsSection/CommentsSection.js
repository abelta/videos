import PropTypes from 'prop-types'

const CommentsSection = ({ style, comments }) => {
  console.log(comments)
  return (
    <div style={style}>
      <h1>{comments.length} Comments</h1>
      <div>
        {comments.map(comment => (
          <p key={comment.id}>{comment.comment}</p>
        ))}
      </div>
    </div>
  )
}

CommentsSection.propTypes = {
  style: PropTypes.object,
  comments: PropTypes.array,
}

export default CommentsSection
