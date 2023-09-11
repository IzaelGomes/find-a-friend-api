import { type FastifyInstance } from 'fastify'
import { create } from './create-pet'

export async function petRoutes (app: FastifyInstance) {
  app.post('/create-pet/:ongId', create)
}
