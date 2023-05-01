'use strict'

const fp = require('fastify-plugin')

const { MONGO_HOSTNAME, MONGO_USERNAME, MONGO_PASSWORD } = process.env

module.exports = fp(async function (fastify, opts) {
  const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:27017/?authMechanism=DEFAULT`
  console.log(url) //mongodb://lee:sanghoon@mongo-nlb-b25c1834de51c921.elb.ap-northeast-2.amazonaws.com:27017/?authMechanism=DEFAULT
                    //mongodb://lee:sanghoon@mongo-nlb-b25c1834de51c921.elb.ap-northeast-2.amazonaws.com:27017/?authMechanism=DEFAULT
  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: url
  })
})