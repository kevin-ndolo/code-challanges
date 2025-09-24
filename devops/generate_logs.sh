#!/bin/bash
# Generate a messy access.log with 100 lines

for i in {1..100}; do
  IP="192.168.$((RANDOM % 255)).$((RANDOM % 255))"
  DATE=$(date -d "$((RANDOM % 30 + 1)) Sep 2025 $((RANDOM % 24)):$((RANDOM % 60)):$((RANDOM % 60))" "+%d/%b/%Y:%H:%M:%S +0300")
  METHOD=$(shuf -n1 -e GET POST PUT DELETE)
  URL=$(shuf -n1 -e / /login /api/data /favicon.ico /admin /search?q=test /robots.txt /wp-login.php /blog/2025/09/24/hello-world.html)
  STATUS=$(shuf -n1 -e 200 301 403 404 500)
  SIZE=$((RANDOM % 2048))
  echo "$IP - - [$DATE] \"$METHOD $URL HTTP/1.1\" $STATUS $SIZE"
done > access.log
