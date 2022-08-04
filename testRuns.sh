#!/bin/bash

docker run --restart=always \
        --name notion-api \
        --net=host \
        -e PORT=3001 \
        -e TOKEN_SECRET=12321321 \
        -e HOST=localhost \
        -e USER=user \
        -e PASSWORD=password \
        -e DB=notionDb \
        -p 3001:3001 \
        -d notion-api
