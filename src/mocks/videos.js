import { user } from './users'

const video = ({ id } = {}) => ({
  id: id || 1,
  title: 'Video 1',
  description: 'This is the first video',
  views: 0,
  thumbnail: null,
  timestamp: new Date().toISOString(),
  author: user(),
})

export { video }
