# ember-multi

[![Greenkeeper badge](https://badges.greenkeeper.io/mike-north/ember-multi.svg)](https://greenkeeper.io/)

A multi-device Ember.js app, using [nw.js](https://github.com/nwjs/nw.js) and [Apache Cordova](https://github.com/apache/cordova-ios) to generate a web app, a mobile app, and a desktop app from a single codebase. 

In my [presentation at Mobile+Web Devcon](http://www.slideshare.net/mikelnorth/write-once-run-everywhere-50676303), I used several git branches to advance through stages of building this app, step by step.

* step-0: Ember-cli set up
* step-1: Routes, with some debugging info in templates to prove that URLs work
* step-2: ember-data models, working adapters and serializers that hit the github API
* step-3: improve UI by setting up [ember-cli-materialize](https://github.com/truenorth/ember-cli-materialize)
* step-4: apache cordova works
* step-5: nw.js works
* step-6: nw.js app has window constraints, and no address bar


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

