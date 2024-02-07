import { http, HttpResponse } from 'msw'
import { user } from './users'
import { video } from './videos'

const handlers = [
  http.post('/login', async () => {
    return HttpResponse.json(user(), { status: 201 })
  }),
  http.get('/home-videos', async () => {
    const videos = Array.from({ length: 20 }, () => video())
    return HttpResponse.json(videos, { status: 201 })
  }),
  http.get('/suscription-videos', async () => {
    const videos = Array.from({ length: 20 }, () => video())
    return HttpResponse.json(videos, { status: 201 })
  }),
  http.get('/video/:id', async ({ params: id }) => {
    return HttpResponse.json(video({ id }), { status: 201 })
  }),
]

export default handlers
