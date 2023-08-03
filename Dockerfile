# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16 as build
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
ENV VITE_KAKAO_STORE_URL="%SERVER_URL%"
ENV VITE_KAKAO_IMAGE_URL="%IMAGE_URL%"
ENV VITE_BASE_URL="%BASE_URL%"
WORKDIR /usr/src/app
RUN corepack enable
COPY . /usr/src/app
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# Run stage
FROM build as run
RUN apt-get update && \
  apt-get install -y nginx && \
  rm -rf /var/lib/apt/lists/* && \
  rm /etc/nginx/sites-enabled/default && \
  rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY startup.sh /startup.sh
RUN chmod +x /startup.sh
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["/bin/bash", "-c", "/startup.sh && nginx -g \"daemon off;\""]
