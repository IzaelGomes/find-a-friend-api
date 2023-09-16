import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaOngRepository } from '../../../repositories/prisma/prisma-ong-repository'
import { FindPetsUseCase } from '../../../use-cases/find-pets'

export async function findPets (request: FastifyRequest, reply: FastifyReply) {
  const petSchemaBody = z.object({
    city: z.string(),
    state: z.string(),
    age: z.enum(['FILHOTE', 'ADULTO']).optional(),
    size: z.enum(['PEQUENINO', 'MEDIO', 'GRANDE']).optional(),
    independent: z.enum(['BAIXO', 'MEDIO', 'ALTO']).optional(),
    energy: z.coerce.number().optional()
  }
  )

  const { energy, age, independent, size, city, state } = petSchemaBody.parse(request.query)

  const ongRepository = new PrismaOngRepository()
  const petuseCase = new FindPetsUseCase(ongRepository)

  const { petsByLocation } = await petuseCase.execute({ state, energy, city, age, independent, size })
  return reply.status(200).send(petsByLocation)
}
