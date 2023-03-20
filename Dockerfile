FROM node:16.18.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./
# COPY ./package.json

RUN npm install

COPY . .

ENV GENERATE_SOURCEMAP=false

RUN npm build

RUN npm global add serve
