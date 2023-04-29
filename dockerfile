from node:16-alpine
COPY ["package.json", "package-lock.json*", "./"]
run npm install -g npm@9.6.5
expose 3000
copy . .
cmd ["npm", "run", "start"]