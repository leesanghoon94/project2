'use strict'

const fp = require('fastify-plugin')
console.log(1234)
const dotenv = require('dotenv')
dotenv.config()

const { MONGO_HOSTNAME, MONGO_USERNAME, MONGO_PASSWORD } = process.env


module.exports = fp(async function (fastify, opts) {
  const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?authMechanism=DEFAULT`
  console.log(url)//mongo-nlb-b25c1834de51c921.elb.ap-northeast-2.amazonaws.com, mongodb://lee:sanghoon@mongo-nlb-b25c1834de51c921.elb.ap-northeast-2.amazonaws.com/?authMechanism=DEFAULT

  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: url
  })
})
