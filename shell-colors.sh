#!/bin/bash

DEFAULT_COLOR="\033[0m"
BLACK_ON_CYAN="\033[46;1;30m"
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

demo ()
{
  echo -e "${DEFAULT_COLOR}DEFAULT_COLOR"
  echo -e "${BLACK_ON_CYAN}BLACK_ON_CYAN"
  echo -e "${RED}RED"
  echo -e "${GREEN}GREEN"
  echo -e "${BROWN}BROWN"
  echo -e "${BLUE}BLUE"
  echo -e "${PURPLE}PURPLE"
  echo -e "${CYAN}CYAN"
  echo -e "${LIGHT_GRAY}LIGHT_GRAY"
  echo -e "${DARK_GRAY}DARK_GRAY"
  echo -e "${LIGHT_RED}LIGHT_RED"
  echo -e "${LIGHT_GREEN}LIGHT_GREEN"
  echo -e "${YELLOW}YELLOW"
  echo -e "${LIGHT_BLUE}LIGHT_BLUE"
  echo -e "${LIGHT_PURPLE}LIGHT_PURPLE"
  echo -e "${LIGHT_CYAN}LIGHT_CYAN"
  echo -e "${WHITE}WHITE"
}

if [[ $1 = "demo" ]]; then
  demo
fi

echo "For print a demo of the colors use \"demo\" arg. Ex: ./shell-colors.sh demo"
