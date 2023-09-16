import { type FastifyInstance } from 'fastify'
import { create } from './create-pet'
import { findPets } from './find-pets'

export async function petRoutes (app: FastifyInstance) {
  app.post('/create-pet/:ongId', create)
  app.get('/find-pet', findPets)
}
