#!/bin/bash

if [ ! -d ".tmp" ]; then
  mkdir .tmp
fi

if [ -d "dist" ]; then
  mv dist .tmp/
fi

if [ -d "ikatoo-frontend" ]; then
  mv ikatoo-frontend .tmp/
fi

git clone https://github.com/mckatoo/ikatoo-frontend.git &&
cd ikatoo-frontend &&
npm install &&
npm run build &&
mv dist ../ &&
cd ../ &&
docker compose up -d

rm -rf .tmp &>/dev/null &
