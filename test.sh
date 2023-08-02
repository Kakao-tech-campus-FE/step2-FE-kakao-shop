#!/bin/bash
# perl -i -pe's@/assets/@'"$PUBLIC_URL"'/assets/@g' /usr/share/nginx/html/index.html
perl -i -pe's@%BASE_URL%@'"$PUBLIC_URL"'@g' index.js