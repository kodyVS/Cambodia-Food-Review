FROM node:14

RUN mkdir -p /var/www/dockerize-nuxt/nuxt-app

WORKDIR /var/www/dockerize-nuxt/nuxt-app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3001

CMD [ "npm", "start" ]
