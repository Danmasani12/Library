FROM node:14

WORKDIR /usr/src/admin-api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "src/app.js"]
