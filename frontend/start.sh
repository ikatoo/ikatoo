#!/bin/bash

mkdir .tmp &&
mv {dist,ikatoo-frontend} .tmp/ &&
git clone https://github.com/mckatoo/ikatoo-frontend.git &&
cd ikatoo-frontend &&
npm install &&
npm run build &&
mv dist ../ &&
cd ../ &&
docker compose up -d

rm -rf .tmp &>/dev/null &
