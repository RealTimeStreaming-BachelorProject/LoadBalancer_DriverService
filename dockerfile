FROM node:15.8-alpine3.10

WORKDIR /app

COPY . .

ENV NODE_ENV production
RUN npm install

ENTRYPOINT [ "npm", "start" ]