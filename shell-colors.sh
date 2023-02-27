#!/bin/bash

DEFAULT_COLOR="\033[0m"
BLACK_ON_CYAN="\033[46;1;30m"
WHITE_ON_RED="\033[41;1;37m"
RED="\033[0;31m"
GREEN="\033[0;32m"
BROWN="\033[0;33m"
BLUE="\033[0;34m"
PURPLE="\033[0;35m"
CYAN="\033[0;36m"
LIGHT_GRAY="\033[0;37m"
DARK_GRAY="\033[1;30m"
LIGHT_RED="\033[1;31m"
LIGHT_GREEN="\033[1;32m"
YELLOW="\033[1;33m"
LIGHT_BLUE="\033[1;34m"
LIGHT_PURPLE="\033[1;35m"
LIGHT_CYAN="\033[1;36m"
WHITE="\033[1;37m"

print ()
{
  COLOR=$1
  TEXT=$2
  echo -e "${COLOR}${TEXT}${DEFAULT_COLOR}"
}

demo ()
{
  print ${DEFAULT_COLOR} DEFAULT_COLOR
  print ${BLACK_ON_CYAN} BLACK_ON_CYAN
  print ${RED} RED
  print ${GREEN} GREEN
  print ${BROWN} BROWN
  print ${BLUE} BLUE
  print ${PURPLE} PURPLE
  print ${CYAN} CYAN
  print ${LIGHT_GRAY} LIGHT_GRAY
  print ${DARK_GRAY} DARK_GRAY
  print ${LIGHT_RED} LIGHT_RED
  print ${LIGHT_GREEN} LIGHT_GREEN
  print ${YELLOW} YELLOW
  print ${LIGHT_BLUE} LIGHT_BLUE
  print ${LIGHT_PURPLE} LIGHT_PURPLE
  print ${LIGHT_CYAN} LIGHT_CYAN
  print ${WHITE} WHITE
  print ${WHITE_ON_RED} WHITE_ON_RED
}

if [[ $1 = "demo" ]]; then
  demo
else
  echo "For print a demo of the colors use \"demo\" arg. Ex: ./shell-colors.sh demo"
fi
