FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run-script build

EXPOSE 80

ENV NODE_SERVER=prod

CMD [ "node", "server/server.js" ]
