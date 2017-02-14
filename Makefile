#! /usr/bin/make -f

user:=${USERNAME}
base:=wine-qa.library.ucdavis.edu:/var/www/html/wine

svg:=images/label-this-title-image.svg

sizes:=144x144 192x192 48x48 512x512 72x72 96x96
icons:=$(patsubst %,images/manifest/icon-%.png,${sizes})

icons:${icons}

${icons}:images/manifest/icon-%.png:
	convert -size $* ${svg} $@

images/favicon.ico:
	convert ${svg} -bordercolor white -border 0 \
	\( -clone 0 -resize 16x16 \) \
	\( -clone 0 -resize 32x32 \) \
	\( -clone 0 -resize 48x48 \) \
	\( -clone 0 -resize 64x64 \) \
	-delete 0 -alpha off -colors 256 $@

.PHONY: build

build:
	polymer build

deploy: build
	rsync -a -v build/unbundled/ ${user}@${base}
