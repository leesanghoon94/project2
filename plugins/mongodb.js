'use strict'

const fp = require('fastify-plugin')
console.log(1234)
const dotenv = require('dotenv')
dotenv.config()

const { MONGO_HOSTNAME, MONGO_USERNAME, MONGO_PASSWORD } = process.env


module.exports = fp(async function (fastify, opts) {
  const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:27017/?authMechanism=DEFAULT`
  console.log(url)

  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: url
  })
})
