import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaOngRepository } from '../../../repositories/prisma/prisma-ong-repository'
import { PrismaPetRepository } from '../../../repositories/prisma/prisma-pet-repository'
import { CreatePetUseCase } from '../../../use-cases/create-pet-use-case'

export async function create (request: FastifyRequest, reply: FastifyReply) {
  const fields = await request.file()
  const requirementsArray = fields?.fields?.requirements?.value
    ? JSON.parse(fields.fields.requirements.value)
    : []

  const imgBase64: Buffer = await fields?.fields.petImgs?.toBuffer()

  const petSchemaBody = z.object({
    name: z.object({
      value: z.string()
    }),
    description: z.object({
      value: z.string()
    }),
    age: z.object({
      value: z.enum(['FILHOTE', 'ADULTO'])
    }),
    size: z.object({
      value: z.enum(['PEQUENINO', 'MEDIO', 'GRANDE'])
    }),
    independent: z.object({
      value: z.enum(['BAIXO', 'MEDIO', 'ALTO'])
    }),
    energy: z.object({
      value: z.coerce.number()
    }),
    enviroment: z.object({
      value: z.string()
    })
  })

  const petSchemaParams = z.object({
    ongId: z.string()
  })

  const { age, description, energy, independent, enviroment, name, size } = petSchemaBody.parse(fields?.fields)

  const data = {
    name: name.value,
    description: description.value,
    age: age.value,
    size: size.value,
    independent: independent.value,
    energy: energy.value,
    enviroment: enviroment.value,
    requirements: requirementsArray,
    petImgs: [
      {
        buffer: imgBase64.toString('base64'),
        imgName: (fields?.fields.petImgs as any)?.filename
      }
    ]
  }

  const { ongId } = petSchemaParams.parse(request.params)

  const petRepository = new PrismaPetRepository()
  const ongRepository = new PrismaOngRepository()
  const petuseCase = new CreatePetUseCase(petRepository, ongRepository)

  await petuseCase.execute({ data, ongId })

  return reply.status(201).send()
}
