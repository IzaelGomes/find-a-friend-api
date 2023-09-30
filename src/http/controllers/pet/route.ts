import { type FastifyInstance } from 'fastify'
import { create } from './create-pet'
import { findPets } from './find-pets'
import { findPet } from './find-pet'
import { verifyJWT } from '../middlewares/verify-jwt'

export async function petRoutes (app: FastifyInstance) {
  app.post('/create-pet/:ongId', { onRequest: [verifyJWT] }, create)
  app.get('/find-pets', { onRequest: [verifyJWT] }, findPets)
  app.get('/find-pet/:petId', { onRequest: [verifyJWT] }, findPet)
}
