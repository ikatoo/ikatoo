#!/bin/bash

source $(dirname "$0")/shell-colors.sh;

if [[ ! -f .env ]]; then
  print ${WHITE_ON_RED} "ENV FILE NOT EXIST."
  exit 1
fi

print ${LIGHT_GREEN} "-- Cleaning environment."
rm -rf frontend
rm -rf frontend-dist
rm -rf backend-about-page



### BEGIN FRONTEND

print ${LIGHT_GREEN} "-- Cloning dev branch from frontend repository."
git clone --branch=dev https://github.com/ikatoo/frontend

print ${LIGHT_GREEN} "-- Entering the frontend directory."
cd frontend

print ${LIGHT_GREEN} "-- Copy env file from root to frontend."
cp ../.env .

print ${LIGHT_GREEN} "-- Installing nodejs dependencies."
npm i

print ${LIGHT_GREEN} "-- Building."
npm run build

print ${LIGHT_GREEN} "-- Move dist directory to root."
mv dist ../frontend-dist

print ${LIGHT_GREEN} "-- Return to the root."
cd ..

print ${LIGHT_GREEN} "-- Remove frontend repository directory"
rm -rf frontend
### END FRONTEND



### BEGIN ABOUT-PAGE BACKEND

print ${LIGHT_BLUE} "-- Cloning dev branch from backend-about-page repository."
git clone --branch=dev https://github.com/ikatoo/backend-about-page

### END ABOUT-PAGE BACKEND



print ${YELLOW} "-- Docker compose up"
docker compose up --build -d

exit 0
