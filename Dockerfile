FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /usr/src/app
RUN corepack enable
COPY . /usr/src/app

# FROM base AS prod-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# FROM base
# COPY --from=prod-deps /usr/src/app/node_modules /usr/src/app/node_modules
# COPY --from=build /usr/src/app/dist /usr/src/app/dist

# Install and setup Nginx
RUN apt-get update && \
  apt-get install -y nginx && \
  rm -rf /var/lib/apt/lists/* && \
  rm /etc/nginx/sites-enabled/default
COPY default.conf /etc/nginx/conf.d/

CMD service nginx start && tail -f /dev/null