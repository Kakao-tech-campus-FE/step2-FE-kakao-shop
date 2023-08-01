# copy all of files for build
FROM node:20-slim
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /usr/src/app
RUN corepack enable
COPY . /usr/src/app
RUN pnpm install --frozen-lockfile

# copy build files to nginx and start nginx
RUN apt-get update && \
  apt-get install -y nginx && \
  rm -rf /var/lib/apt/lists/* && \
  rm /etc/nginx/sites-enabled/default
COPY default.conf /etc/nginx/conf.d/
EXPOSE 80

CMD pnpm run build && service nginx start && tail -f /dev/null
