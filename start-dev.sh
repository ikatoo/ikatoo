#!/bin/bash

DEFAULT_COLOR="\033[0m"
GREEN="\033[0;32m"  
        
echo -e "${GREEN}-- Cleaning environment.${DEFAULT_COLOR}"
rm -rf frontend
rm -rf frontend-dist

echo -e "${GREEN}-- Cloning dev branch from frontend repository.${DEFAULT_COLOR}"
git clone --branch=dev https://github.com/ikatoo/frontend

echo -e "${GREEN}-- Entering the frontend directory.${DEFAULT_COLOR}"
cd frontend

echo -e "${GREEN}-- Copy env file from root to frontend.${DEFAULT_COLOR}"
cp ../.env .

echo -e "${GREEN}-- Installing nodejs dependencies.${DEFAULT_COLOR}"
npm i

echo -e "${GREEN}-- Building.${DEFAULT_COLOR}"
npm run build

echo -e "${GREEN}-- Move dist directory to root.${DEFAULT_COLOR}"
mv dist ../frontend-dist

echo -e "${GREEN}-- Return to the root.${DEFAULT_COLOR}"
cd ..

echo -e "${GREEN}-- Remove frontend repository directory${DEFAULT_COLOR}"
rm -rf frontend

echo -e "${GREEN}-- Docker compose up${DEFAULT_COLOR}"
docker compose up -d
