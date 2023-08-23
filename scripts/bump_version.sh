#! /bin/bash

echo $1

shopt -s extglob

config () {
  yarn config set version-git-tag false
  yarn config set version-tag-prefix ""
}


case $1 in
  [Hh]otfix/?* | [Bb]ugfix/?* )
    config
    yarn version --patch
    ;;
  [Ff]eature/?* )
    config
    yarn version --minor
    ;;
  # Major incremented manually
  !([Mm]ajor/?*) )
    echo "error: invalid commit message pattern"
    exit 1
    ;;
esac