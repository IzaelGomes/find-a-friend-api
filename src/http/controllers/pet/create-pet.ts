import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaOngRepository } from '../../../repositories/prisma/prisma-ong-repository'
import { PrismaPetRepository } from '../../../repositories/prisma/prisma-pet-repository'
import { CreatePetUseCase } from '../../../use-cases/create-pet-use-case'

export async function create (request: FastifyRequest, reply: FastifyReply) {
  const petSchemaBody = z.object({
    name: z.string(),
    description: z.string(),
    age: z.enum(['FILHOTE', 'ADULTO']),
    size: z.enum(['PEQUENINO', 'MEDIO', 'GRANDE']),
    independent: z.enum(['BAIXO', 'MEDIO', 'ALTO']),
    energy: z.number(),
    enviroment: z.string(),
    requirements: z.object({
      description: z.string()
    }).array(),
    petImgs: z.object({
      buffer: z.string(),
      imgName: z.string()
    }).array()
  })

  const petSchemaParams = z.object({
    ongId: z.string()
  })

  const { ongId } = petSchemaParams.parse(request.params)

  const data = petSchemaBody.parse(request.body)

  const petRepository = new PrismaPetRepository()
  const ongRepository = new PrismaOngRepository()
  const petuseCase = new CreatePetUseCase(petRepository, ongRepository)

  await petuseCase.execute({ data, ongId })

  return reply.status(201).send()
}
