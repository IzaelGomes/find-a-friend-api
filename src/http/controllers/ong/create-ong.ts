import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaOngRepository } from '../../../repositories/prisma/prisma-ong-repository'
import { CreateOngUseCase } from '../../../use-cases/create-ong-use-case'

export async function create (request: FastifyRequest, reply: FastifyReply) {
  const ongSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    cep: z.string(),
    adress: z.string(),
    state: z.string(),
    city: z.string(),
    phone: z.string(),
    password: z.string()
  })

  const data = ongSchema.parse(request.body)

  const ongRepository = new PrismaOngRepository()
  const petuseCase = new CreateOngUseCase(ongRepository)

  await petuseCase.execute({ data })

  return reply.status(201).send()
}
