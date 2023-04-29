from node:16-alpine
COPY ["package.json", "package-lock.json*", "./"]
run npm install
expose 3000
copy . .
cmd ["npm", "run", "start"]