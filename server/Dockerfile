FROM node:8.6.0
RUN mkdir -p /wwwroot
WORKDIR /wwwroot

RUN npm install --global nodemon

COPY package.json yarn.lock /wwwroot/
RUN yarn

COPY . /wwwroot

EXPOSE 4000

CMD ["npm", "run", "serve-watch"]
