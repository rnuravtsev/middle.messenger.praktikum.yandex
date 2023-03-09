FROM node

WORKDIR /Users/albertmuravcev/WebstormProjects/middle.messenger.praktikum.yandex

RUN npm install

RUN npm start

EXPOSE 3000

CMD [ "npm", "start" ]
