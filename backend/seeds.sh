#!/bin/sh

# for f in $(seq 1 100)
# do
#     name=$(echo $RANDOM | md5 | head -c8 ;  echo )
#     curl 'http://localhost:3000/api/users' \
#     -H 'Content-Type: application/json' \
#     --data-raw "{\"user\":{\"username\":\"$name\",\"email\":\"$name@test.com\",\"password\":\"$name\"}}" \
    
# done

node backend/seeding.js