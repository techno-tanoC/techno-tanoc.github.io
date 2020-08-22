FROM node:lts-alpine

WORKDIR /build

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
