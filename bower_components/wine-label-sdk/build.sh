#! /bin/bash

ROOT=./node_modules/.bin

rm -rf dist
mkdir dist

# --debug: adds sourcemaps
# --standalone: creates exposed namespace
$ROOT/browserify \
    --standalone UCDWineSDK \
    --debug \
    lib/index.js \
    -o dist/wine-label-sdk.js \
    -t [ babelify --presets [ es2015 ] ]