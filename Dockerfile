FROM node:8.6.0

RUN mkdir -p /wwwroot

WORKDIR /wwwroot

RUN npm install --global nodemon

COPY package.json yarn.lock /wwwroot/
COPY ./client/package.json ./client/yarn.lock /wwwroot/client/
RUN npm run full-install

COPY . /wwwroot

EXPOSE 3000 4000

CMD ["npm", "run", "start-production"]
