'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {}

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}

////
const fastify = require('fastify')();

// .env 파일을 로드하기 위해 dotenv 패키지를 설치하고 불러옵니다.
require('dotenv').config();

fastify.register(require('@fastify/autoload'), {
  // 연결 정보
  url: process.env.MONGODB_URI,
  // 선택 사항: 기본값은 false입니다.
  // 연결 시도 중에 재시도 할지 여부를 지정합니다.
  // retryMiliSeconds: 5000 밀리 초 간격으로 재시도합니다.
  retry: true
});

fastify.get('/users', async (request, reply) => {
  const users = await fastify.mongo.db.collection('users').find().toArray();
  return users;
});

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


