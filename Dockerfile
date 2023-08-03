FROM krmp-d2hub-idock.9rum.cc/goorm/node:16

WORKDIR step2-FE-kakao-shop2/my-app

COPY package*.json ./

RUN npm ci

COPY . .

RUN apt-get update && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/* && \
    rm /etc/nginx/sites-enabled/default
COPY default.conf /etc/nginx/conf.d/

RUN npm install -g serve

CMD npm run build && service nginx start && serve -s build