# copy all of files for build
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /usr/src/app
RUN corepack enable
COPY . /usr/src/app

# build
FROM base AS build
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# copy build files to nginx and start nginx
FROM nginx
COPY default.conf /etc/nginx/conf.d/
COPY --from=build /usr/src/app/dist /usr/src/app/dist
CMD service nginx start && tail -f /dev/null