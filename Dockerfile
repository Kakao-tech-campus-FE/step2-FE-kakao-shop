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
FROM nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
