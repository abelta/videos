import {
  randUuid,
  randUserName,
  randEmail,
  randAvatar,
  randNumber,
} from '@ngneat/falso'

const user = ({ id, username } = {}) => ({
  id: id || randUuid(),
  username: username || randUserName(),
  email: randEmail(),
  avatar: `${randAvatar()}?${Math.random()}}`,
  subscriberNumber: randNumber(),
})

export { user }
