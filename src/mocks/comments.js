import {
  randUuid,
  randParagraph,
  randNumber,
  randImg,
  randPastDate,
} from '@ngneat/falso'
import { user } from './users'

const comment = () => ({
  id: randUuid(),
  comment: randParagraph({ min: 1, max: 5 }),
  thumbnail: `${randImg({ height: 191, width: 339 })}?${Math.random()}}`,
  timestamp: randPastDate(),
  author: user(),
  likes: randNumber(),
})

export { comment }
