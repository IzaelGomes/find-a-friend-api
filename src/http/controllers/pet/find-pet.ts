import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { FindPetUseCase } from '../../../use-cases/find-pet-by-id-use-case'
import { PrismaPetRepository } from '../../../repositories/prisma/prisma-pet-repository'
import { PetNotFoundError } from '../../../use-cases/erros/pet-not-found-erro'

export async function findPet (request: FastifyRequest, reply: FastifyReply) {
  const petSchemaBody = z.object({
    petId: z.string().uuid()
  }
  )

  const { petId } = petSchemaBody.parse(request.params)

  try {
    const petRepository = new PrismaPetRepository()
    const petuseCase = new FindPetUseCase(petRepository)

    const { pet } = await petuseCase.execute(petId)

    return reply.status(200).send(pet)
  } catch (error) {
    if (error instanceof PetNotFoundError) {
      reply.status(404).send({
        message: error.message
      })
    }

    throw error
  }
}
