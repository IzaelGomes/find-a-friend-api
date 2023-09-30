import { type FastifyInstance } from 'fastify'
import { create } from './create-ong'
import { Authenticate } from './authenticate'

export async function ongRoutes (app: FastifyInstance) {
  app.post('/create-ong', create)

  app.post('/session', Authenticate)
}
