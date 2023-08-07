rm -rf /var/lib/apt/lists/*
rm /etc/nginx/sites-enabled/default
service nginx start
service mysql start
(cd /goormService/backend && gradle wrapper && ./gradlew clean build )
java -jar -Dspring.profiles.active=ide /goormService/backend/build/libs/kakao-1.0.jar