_[Docs and Demos](https://qjhart.github.io/wine-label/)_

# \<wine-label\>

Polymer element to deliver wine label information via simple graphic.  

This application is an educational example only.  Images and information were obtained from the Alcohol and Tobacco Tax and Trade Bureau's _[Wine Labeling Regulations](https://www.ttb.gov/wine/wine-labeling.shtml)_, with an additional example from _[Napa Vintners](https://napavintners.com/wines/how_to_read_a_wine_label.asp)_.

Use \<wine-label\> element to deliver wine label information.  This is a general purpose tag that needs to be instantiated with an image and appropriate wine-label-parts.  In the normal usage, a \<wine-label\> element takes as input an image, and a set of label parts.  
The element displays the image, and as the user mouses over the image, highlighted regions
of the image are shown, corresponding to a label part.  On focus, the description of this part is made for the user.

Use the \<wine-label-ttb\> element to deliver basic wine label information regulations for the US from the _[Alcohol and Tobacco Tax and Trade Bureau](https://www.ttb.gov/wine/wine-labeling.shtml)_.  One may use this tag alone, the information is pre-cooked.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
