import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaOngRepository } from '../../../repositories/prisma/prisma-ong-repository'
import { AuthenticateUseCase } from '../../../use-cases/authenticate-use-case'
import { InvalidCredentialsError } from '../../../use-cases/erros/invalid-credentials.erro'

export async function Authenticate (request: FastifyRequest, reply: FastifyReply) {
  try {
    const ongAuthenticate = z.object({
      email: z.string().email(),
      password: z.string().min(6)
    })

    const data = ongAuthenticate.parse(request.body)

    const ongRepository = new PrismaOngRepository()
    const petuseCase = new AuthenticateUseCase(ongRepository)

    const { ong } = await petuseCase.execute({ email: data.email, password: data.password })

    const token = await reply.jwtSign({}, {
      sign: {
        sub: ong.id
      }
    })

    return reply.status(200).send({
      token
    })
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(409).send({
        message: error.message
      })
    }

    throw error
  }
}
