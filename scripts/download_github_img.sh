#!/bin/bash
curl -L https://github.com/tuo-username.png?size=300 -o ./public/prova.jpg
cwebp -q 80 ./public/prova.jpg -o ./public/prova.webp