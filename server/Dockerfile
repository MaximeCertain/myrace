FROM node:12

RUN mkdir -p /usr/src/app
RUN npm i npm@latest -g
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY .  /usr/src/app/
VOLUME ["/usr/src/app/"]
EXPOSE 8080
CMD [ "npm", "start" ]




