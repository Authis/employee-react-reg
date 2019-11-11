FROM node:10.16.0

WORKDIR /usr/app

COPY . .

EXPOSE 3000

RUN npm install

CMD ["npm","start"]
