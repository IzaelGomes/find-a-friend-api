import { fastify } from './app'

fastify.listen({ port: 3300 }).then(() => {
  console.log('server is running')
}).catch((err: any) => {
  console.log(err)
})
