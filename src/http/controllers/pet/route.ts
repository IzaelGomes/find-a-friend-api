import { type FastifyInstance } from 'fastify'
import { create } from './create-pet'
import { findPets } from './find-pets'
import { findPet } from './find-pet'

export async function petRoutes (app: FastifyInstance) {
  app.post('/create-pet/:ongId', create)
  app.get('/find-pets', findPets)
  app.get('/find-pet/:petId', findPet)
}
