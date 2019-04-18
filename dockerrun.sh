#!/bin/sh

# TODO: compute hashsum of env vars and only rebuild if need to
yarn build
yarn start
