FROM node:7-onbuild

WORKDIR /usr/app

COPY . .

EXPOSE 3000

RUN npm install

CMD ["npm","start"]
