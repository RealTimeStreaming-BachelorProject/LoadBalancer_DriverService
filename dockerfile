FROM node:15.8-alpine3.10

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "start" ]