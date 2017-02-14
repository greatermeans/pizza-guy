# online-delivery

This is a project that uses [React](https://facebook.github.io/react/), [Firebase](https://firebase.google.com/), and [Material-UI](http://callemall.github.io/material-ui/) with [Webpack](http://webpack.github.io/docs/).

## Installation

#### After cloning the repository, install dependencies:
```sh
npm install
```

#### Now you can run your local server:
```sh
npm start
```
Server is located at http://localhost:3000

## Project Directory Tree

This is a high-level overview of the project directory structure to assist contributors.

```sh
$ tree -I 'test*|docs|bin|lib|build|node_modules|*.*|font*'
```
```
.
└── src
    ├── app
    │   ├── components
    │   │   └── pages
    │   └── services
    └── www
        └── css
```


## Description of [Webpack](http://webpack.github.io/docs/)

Webpack is a module bundler that we are using to run our documentation site.
This is a quick overview of how the configuration file works.

### Webpack Configuration:

#### Entry

Webpack creates entry points for the application to know where it starts.

#### Output

This is where the bundled project will go to and any other files necessary for it to run.

#### Plugins

These are plugins Webpack uses for more functionality.
The HTML Webpack Plugin, for example, will add the index.html to your build folder.

#### Modules

Modules and other things that are required will usually need to be loaded and interpreted by Webpack when bundling, and this is where Webpack looks for the different loaders.
* Loading .js files in es6 and es7 will require a loader like babel-loader to interpret the files into es5.
