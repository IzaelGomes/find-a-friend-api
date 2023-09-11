import { type FastifyInstance } from 'fastify'
import { create } from './create-ong'

export async function ongRoutes (app: FastifyInstance) {
  app.post('/create-ong', create)
}
