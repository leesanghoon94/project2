from node:16-alpine
COPY ["package.json", "package-lock.json*", "./"]
run npm install -g npm@9.6.5
run npm install -g fastify
run npm i @fastify/mongodb
expose 3000
copy . .
cmd ["npm", "run", "start"]