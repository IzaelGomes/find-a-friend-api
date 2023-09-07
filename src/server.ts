import dotenv from 'dotenv'

import Fastify from 'fastify'
dotenv.config()

const fastify = Fastify()

fastify.listen({ port: 3300 }).then(() => {
  console.log('server is running')
}).catch((err) => {
  console.log(err)
})

fastify.setErrorHandler(function(error, _, reply) {
  if (error instanceof Error) {
    return reply.status(500).send({message: 'internal server error'})
  }
})
