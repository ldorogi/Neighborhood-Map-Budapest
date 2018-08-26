# Neighborhood Map App

Project 8 Front End Nanodegree Udacity

## Table of Contents

* [Project Overview](Project-Overview)
* [How To Run This App](How-To-Run-This-App)
* [Run with Service Worker](Run-with-Service-Worker)
* [Dependencies](Dependencies)
* [NOTE](Note)

## Project Overview

This is a single page application featuring a map of neighborhood of Budapest, capital of Hungary. Clicking a marker on the map will open more information about that location. Clicking a name in the list view will also display the information for the associated marker. The list of locations is filterable with a text input. Filtering the list also filters the markers on the map. The web app is mobile responsive - the hamburger menu icon is used to hide the list on small screens.

## How To Run This App

* Download node
* git clone https://github.com/ldorogi/Neighborhood-Map-Budapest
* cd Neighborhood-Map-Budapest
* npm install
* npm start
* open http://localhost:3000 in a browser

## Run with Service Worker 

* npm run build
* npm install -g serve
* serve -s build
* open http://localhost:5000

## Dependencies

* [React Framework](https://reactjs.org/)
* [Bootstrapped with Create React App](https://github.com/facebook/create-react-app)
* [Map API system used: google-maps-react](https://github.com/fullstackreact/google-maps-react)
* [Foursquare API for top locations](https://foursquare.com/)

## NOTE

It is important to note that the assets will only be cached when we are in production mode.