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

