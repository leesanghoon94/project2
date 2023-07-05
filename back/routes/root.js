'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    console.log(process.env.MONGO_ROOT_INIT_USERNAME)
    console.log(process.env.MONGO_ROOT_INIT_PASSWORD)
    console.log(process.MONGO_HOSTNAME)
    return { root: true, host: process.env.MONGO_HOSTNAME, username: process.env.MONGO_ROOT_INIT_USERNAME, password: process.env.MONGO_ROOT_INIT_PASSWORD }
  })
}