#!/bin/bash

source $(dirname "$0")/shell-colors.sh;

echo -e "${LIGHT_GREEN}-- Cleaning environment.${DEFAULT_COLOR}"
rm -rf frontend
rm -rf frontend-dist
rm -rf backend-about-page



### BEGIN FRONTEND

echo -e "${LIGHT_GREEN}-- Cloning dev branch from frontend repository.${DEFAULT_COLOR}"
git clone --branch=dev https://github.com/ikatoo/frontend

echo -e "${LIGHT_GREEN}-- Entering the frontend directory.${DEFAULT_COLOR}"
cd frontend

echo -e "${LIGHT_GREEN}-- Copy env file from root to frontend.${DEFAULT_COLOR}"
cp ../.env .

echo -e "${LIGHT_GREEN}-- Installing nodejs dependencies.${DEFAULT_COLOR}"
npm i

echo -e "${LIGHT_GREEN}-- Building.${DEFAULT_COLOR}"
npm run build

echo -e "${LIGHT_GREEN}-- Move dist directory to root.${DEFAULT_COLOR}"
mv dist ../frontend-dist

echo -e "${LIGHT_GREEN}-- Return to the root.${DEFAULT_COLOR}"
cd ..

echo -e "${LIGHT_GREEN}-- Remove frontend repository directory${DEFAULT_COLOR}"
rm -rf frontend
### END FRONTEND



### BEGIN ABOUT-PAGE BACKEND

echo -e "${LIGHT_BLUE}-- Cloning dev branch from backend-about-page repository.${DEFAULT_COLOR}"
git clone --branch=dev https://github.com/ikatoo/backend-about-page

### END ABOUT-PAGE BACKEND



echo -e "${YELLOW}-- Docker compose up${DEFAULT_COLOR}"
docker compose up --build -d
