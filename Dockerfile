FROM node:16.18.1

WORKDIR /var/www/app

COPY package.json ./

RUN npm install

RUN npm run clean

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
