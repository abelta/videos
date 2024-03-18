const formatCompactNumber = number =>
  number?.toLocaleString('en-US', {
    notation: 'compact',
  })

export default formatCompactNumber
