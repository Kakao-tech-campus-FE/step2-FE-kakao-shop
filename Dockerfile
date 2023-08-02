# Build stage
FROM node:20-slim AS build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV VITE_KAKAO_STORE_URL="http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com"
ENV VITE_KAKAO_IMAGE_URL="http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com"
WORKDIR /usr/src/app
RUN corepack enable
COPY . /usr/src/app
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# Run stage
FROM node:20-slim
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist dist

# Install and setup Nginx
RUN apt-get update && \
  apt-get install -y nginx && \
  rm -rf /var/lib/apt/lists/* && \
  rm /etc/nginx/sites-enabled/default
COPY default.conf /etc/nginx/conf.d/

# Install serve for serving static files
RUN npm install -g serve
EXPOSE 3000

# Start Nginx and serve
CMD service nginx start && serve -s dist 