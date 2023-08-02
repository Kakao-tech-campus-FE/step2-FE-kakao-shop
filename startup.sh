#!/bin/bash
perl -i -pe's@/assets/@'"$PUBLIC_URL"'/assets/@g' /usr/share/nginx/html/index.html