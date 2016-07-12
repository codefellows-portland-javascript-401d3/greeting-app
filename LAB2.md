![cf](http://i.imgur.com/7v5ASc8.png)  Lab 02: Build Tools
===

## Description:

This work is to be done as a continuation of your fork of the `greeting-app` assignment.

For this assignment you will add the following:
  * dependency tracking via npm and package.json. 
  __Before coding this lab, first create version `1.0.0` and commit so you have a baseline for CHANGELOG.md__
  * Enhance your greeting features. 
    * Use at least one third-party npm library, example: add icon/art/emoji greeting
    * Add at least one new option to the greet function

  * automated build and development environent via gulp or npm scripts
  * changelog and semver "history":
    * the version from the previous lab is `v1.0.0`
    * break the work above into at least 3 "releases"
    * Properly increment the semver according to the change in each "release"

The package.json file should include:
  * all the dependencies and dev devdependencies for the project.
  * npm scripts, or npm scripts for running gulp (ex: start, build, watch, dev)

The gulpfile or npm scripts should address:
  * a task to run the mocha/assert test
  * running eslint
  * watch functionality (only watches .js files)

## Bonus **3pts**  
Add to core library and cli:
* solicit input and respond with second greeting that includes response.
* Add appropriate cli and unit tests. 


## Rubric:

* Correct Submission: 1pts
* Code Quality: 2pts
* package.json: 2pts
* npm scripts/gulpfile: 2pts
* changelog/semver: 3pts
