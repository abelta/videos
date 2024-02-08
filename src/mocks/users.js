const user = ({ username } = {}) => ({
  id: '1',
  username: username || 'user1',
  email: 'user@user.com',
})

export { user }
