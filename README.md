whats-er-name - [Kendo UI](http://docs.telerik.com/kendo-ui/mobile/introduction) mobile web app 
==================

The whats-er-name app captures head-shots and names for the purpose of memorizing a group of peoples names (really, can be used to remember any image you to want group and name). I conjured up this application to help me memorize the names of each child on my son's football team. The applications functionality provides a UI to create a group, then enter a name and head shot (taken with camera or pull in a photo already taken) for each person in the group. The point of the application is to create a [sideshow](http://demos.telerik.com/kendo-ui/scrollview/index) of named photos for memorizing faces and names.

This application was created using Kendo UI Mobile widgets and application tools. It is the example application used in the ["Kendo UI Mobile Guide"](https://github.com/telerik/kendo-ui-mobile-guide).

## Prerequisites to run/build app

* [NodeJS](http://nodejs.org/) & [NPM](https://www.npmjs.org/) (installed globally)
  * [Bower](http://bower.io/) (installed globally)
* A browser. Its intended to run on mobile browsers but can run on any browser. Therefore you can immediately download this code, install all the dependencies, and run/build this application.

## Install npm and bower dependencies

It's assume you have forked or downloaded this repository and will run the following commands in the terminal from the directory you downloaded


```sh
$ sudo npm install
```

then

```sh
$ bower install
```

## Build, server, and watch development code

To build, serve, and watch src changes during development run the following gulp task:

```sh
$ gulp dev
```

This task will start a server, open a browser, and serve the app at localhost:3027 (from `wwwDev` directory) and reload upon any changes made in `src` directory (i.e. watching for changes so application can be rebuilt and reloaded in browser). The `gulp dev` build process is ran during development to manage tasks required to build the application. You can kill the server & watching using Ctrl + C.

Run `gulp dev` at least once before you run the `gulp prod`.

## Build & serve production code 

To build, test, and server production code run the following gulp task:

```sh
$ gulp prod
```

This task will take files from `wwwDev` directory and produce a production ready version of the application saved in the `wwwProd` directory. This command also will spin up a server, open a browser, and serve the production ready files at http://localhost:3028. This command must be manually re-run, it's not being watched for changes in the src files. You can kill the server using Ctrl + C.

Do a build only after you have run `gulp dev` at least once and the `wwwProd` directory has been created.

