
_[Demo](https://qjhart.github.io/wine-label-app/)_

# Wine Label Application

This is a simple Polymer application that demonstrates the use of the wine-label element.  It is basically a 
standard Polymer drawer application surrounding some example _[wine-label](https://www.github.com/qjhart/wine-label)_  elements.  

This application is an educational example only.  Images and information were obtained from the Alcohol and Tobacco Tax and Trade Bureau's _[Wine Labeling Regulations](https://www.ttb.gov/wine/wine-labeling.shtml)_, with an additional example from _[Napa Vintners](https://napavintners.com/wines/how_to_read_a_wine_label.asp)_.

### Build

There seem to be some small problems with the polymer build,  in that all components of the shared bower files
not copied to the install directory, that's the ```bower_components``` item below.

    polymer build --sources manifest.json images/* bower_components/wine-label/label-ttb.png bower_components/webcomponentsjs/webcomponents-lite.min.js

### Test the build

Although the build produces bundled and unbundled code, I've removed the cache server, and There
is very little difference, besides the bundling of the files.

This command serves the minified version of the app generated using fragment bundling:

    polymer serve build/bundled

### Installation 

This demo installation for this example is provided by copying the final bundled build into the ```gh-pages``` branch of this repository.
