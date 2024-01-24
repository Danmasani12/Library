FROM node:14

WORKDIR /usr/src/client-api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "src/app.js"]
