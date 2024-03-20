import {
  randUuid,
  randPhrase,
  randParagraph,
  randNumber,
  randImg,
  randPastDate,
  toCollection,
} from '@ngneat/falso'
import { user } from './users'
import { comment } from './comments'

const video = ({ id } = {}) => ({
  id: id || randUuid(),
  title: randPhrase(),
  description: randParagraph({ length: 10 }).join('/n'),
  views: randNumber(),
  thumbnail: `${randImg({ height: 191, width: 339 })}?${Math.random()}}`,
  timestamp: randPastDate(),
  author: user(),
  likes: randNumber(),
  comments: toCollection(() => comment(), {
    length: randNumber({ min: 0, max: 500 }),
  }),
})

export { video }
