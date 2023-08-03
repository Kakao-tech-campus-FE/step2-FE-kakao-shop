FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .

RUN apt-get update && \
apt-get install -y nginx && \
rm -rf /var/lib/apt/lists/* && \
rm /etc/nginx/sites-enabled/default
COPY default.conf /etc/nginx/conf.d/

RUN yarn add -g serve

CMD yarn build && service nginx start && serve -s build
