FROM node:14.20.0 as build


WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./

RUN yarn 

COPY . .
EXPOSE 3000

CMD ["yarn", "start"]

