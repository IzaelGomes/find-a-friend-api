import dotenv from 'dotenv'
import Fastify from 'fastify'
import { ongRoutes } from './http/controllers/ong/route'
import { ZodError } from 'zod'
import { petRoutes } from './http/controllers/pet/route'

import mult from '@fastify/multipart'

dotenv.config()

export const fastify = Fastify()

fastify.register(mult)

fastify.register(ongRoutes)
fastify.register(petRoutes)

fastify.setErrorHandler(function (error, _, reply) {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'validation error.',
      issues: error.format()
    })
  }

  console.log(error)

  return reply.status(500).send({ message: 'internal server error' })
})
