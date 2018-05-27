FROM node:8.6.0
RUN mkdir -p /wwwroot

WORKDIR /wwwroot

COPY ./package.json ./yarn.lock /wwwroot/
RUN cd /wwwroot
RUN yarn

COPY . /wwwroot

EXPOSE 3000

CMD ["npm", "run", "start"]
