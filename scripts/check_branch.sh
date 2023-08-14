#! /bin/bash

shopt -s extglob

echo branch name: ${1}

case $1 in
 !([Hh]otfix/?*|[Bb]ugfix/?*|[Ff]eature/?*) )
    echo error: invalid branch name
    exit 1
    ;;
  * )
    echo name ok
    ;;
esac