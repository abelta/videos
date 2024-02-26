import {
  randUuid,
  randPhrase,
  randParagraph,
  randNumber,
  randImg,
  randPastDate,
} from '@ngneat/falso'
import { user } from './users'

const video = ({ id } = {}) => ({
  id: id || randUuid(),
  title: randPhrase(),
  description: randParagraph({ length: 10 }).join('/n'),
  views: randNumber(),
  thumbnail: `${randImg({ height: 191, width: 339 })}?${Math.random()}}`,
  timestamp: randPastDate(),
  author: user(),
  likes: randNumber(),
})

export { video }
