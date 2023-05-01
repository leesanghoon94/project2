'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/cors'))
})

// import Fastify from 'fastify'
// import cors from '@fastify/cors'

// const fastify = Fastify()
// await fastify.register(cors, { 
//   // put your options here
// })

// fastify.get('/', (req, reply) => {
//   reply.send({ hello: 'world' })
// })

// await fastify.listen({ port: 3000 })