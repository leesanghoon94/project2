'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (req, reply) {
    reply.send([
      {
        "name": "용다방",
        "menu": [
          {
            "name": "애플 시나몬 에이드",
            "price": 6500,
            "duration": 5
          },
          {
            "name": "카페모카",
            "price": 6000,
            "duration": 5
          }
        ],
        "address": "서울시 마포구 양화로 1111",
        "rating": 4.5
      },

      {
        "name": "뻭디방",
        "menu": [
          {
            "name": "아이스 아메리카노",
            "price": 6500,
            "duration": 5
          },
          {
            "name": "카스테라",
            "price": 6000,
            "duration": 5
          }
        ],
        "address": "서울시 마포구 양화로 1111",
        "rating": 4.5
      }
    ])
  })
}