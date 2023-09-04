import dotenv from "dotenv"
import Fastify from "fastify";

const fastify = Fastify()




fastify.listen({port:3300}).then(() => {
    console.log("server is running")
})