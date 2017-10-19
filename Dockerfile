FROM node:8.6.0

RUN mkdir -p /wwwroot

WORKDIR /wwwroot

COPY package.json /wwwroot
COPY yarn.lock /wwwroot

RUN yarn install

COPY . /wwwroot

EXPOSE 3000

CMD ["npm", "start"]
