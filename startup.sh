#!/bin/bash
perl -i -pe's@/assets/@'"$PUBLIC_URL"'/assets/@g' /usr/share/nginx/html/index.html
perl -i -pe's@%BASE_URL%@'"$PUBLIC_URL"'@g' /usr/share/nginx/html/**/*.js
perl -i -pe's@%SERVER_URL%@'"$PUBLIC_URL"/api'@g' /usr/share/nginx/html/**/*.js
perl -i -pe's@%IMAGE_URL%@'"$PUBLIC_URL"'@g' /usr/share/nginx/html/**/*.js