FROM node:8.6.0

RUN mkdir -p /wwwroot

WORKDIR /wwwroot


<<<<<<< HEAD
COPY package.json yarn.lock /wwwroot/
COPY ./client/package.json ./client/yarn.lock /wwwroot/client/
RUN npm run full-install

COPY . /wwwroot

EXPOSE 3000 4000

CMD ["npm", "run", "start-production"]
=======
COPY package.json /wwwroot
COPY yarn.lock /wwwroot

RUN yarn install
RUN npm install --global nodemon

COPY . /wwwroot

EXPOSE 3000

CMD ["npm", "start"]
>>>>>>> debug Dockerfile / pipeline
