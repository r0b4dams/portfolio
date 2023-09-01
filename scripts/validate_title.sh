#!/usr/bin/env bash

shopt -s extglob

echo pr title: ${1}

case $1 in
 !([Hh]otfix/?*|[Bb]ugfix/?*|[Ff]eature/?*) )
    echo error: invalid pr title
    exit 1
    ;;
  * )
    echo name ok
    ;;
esac