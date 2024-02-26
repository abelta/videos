import { randWord, randUuid } from '@ngneat/falso'

const tag = () => ({ id: randUuid(), name: randWord() })

export { tag }
