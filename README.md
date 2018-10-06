# New York Times React Search App

## Overview
The goal of this homework assignment is to develop a React-based rendition of the New York Times Article Search app. This assignment requires creating React components, work with help/util functions, and utilize the React mounting lifecycle to query and display articles based on user searches. Node, Express and MongoDN will also be used so that users can save the articles to read later

## Process
The documented process below is for my own purpose of keeping track of progress of this assignment ;)

### Setup (10/05/2018)
I setup the app structure with the following directories and files:
- client directory
    This directory was created automatically by running the command "npx create-react-app client"
    *Note 1: added "proxy" in the package so react can be served seperately from api server in development environment* 
    *Note 2: installed react-router-dom* 
- routes directory
    This directory was manually created and will contain the various routes for making api calls
- package.json
    This package was created automatically on npm init. Added scripts for the following:
        - "start" => this simplfy development and able to run start in all environments & run the correct scripts
        - "start:prod" => using this command runs node server.js in production environment
        - "start:dev" => using this command will run the "client" command concurrently, but ignore nodemon
        - "client" => is automatically run with "start:dev" and will npm start in the client directory
        - "install" => is automatically run with "client" and will install packages in the client directory
        - "build" => using this command will create minified files in the client directory for deployment
        - "heroku-postbuild" => using this command will create heroku deployable minified files for all files within the root
    This package also contains dependencies for the root
- server.js
    "Require" dependencies from the package of the root and serving the app

