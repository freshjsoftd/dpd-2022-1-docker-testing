ARG VERSION=18-alpine

FROM node:$VERSION

RUN mkdir server

WORKDIR /server

COPY . .

RUN npm install

EXPOSE 5000

CMD npm start
