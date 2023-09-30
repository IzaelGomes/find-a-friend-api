import { type FastifyInstance } from 'fastify'
import { create } from './create-ong'
import { Authenticate } from './authenticate'
import { verifyJWT } from '../middlewares/verify-jwt'

export async function ongRoutes (app: FastifyInstance) {
  app.post('/create-ong', { onRequest: [verifyJWT] }, create)

  app.post('/session', Authenticate)
}
