import dotenv from 'dotenv'
import Fastify from 'fastify'
import { ongRoutes } from './http/controllers/ong/route'
import { ZodError } from 'zod'
import { petRoutes } from './http/controllers/pet/route'

import mult from '@fastify/multipart'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'

dotenv.config()

export const fastify = Fastify()

fastify.register(fastifyJwt, {
  secret: String(process.env.JWT_SECRET),
  cookie: {
    cookieName: 'refreshToken',
    signed: false
  },
  sign: {
    expiresIn: '10m'
  }
})

fastify.register(fastifyCookie)

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
