FROM node:8.6.0

RUN mkdir -p /wwwroot

WORKDIR /wwwroot

RUN npm install --global nodemon

COPY package.json yarn.lock /wwwroot/
RUN yarn install

COPY ./client/package.json /wwwroot/client/package.json
WORKDIR /wwwroot/client
RUN yarn install

COPY . /wwwroot

EXPOSE 3000 4000

WORKDIR /wwwroot

CMD ["npm", "start"]
