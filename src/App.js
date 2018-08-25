import React, { Component } from 'react';
import Filter from './Filter';
import GMap from './GMap';
import Header from './Header';
import escapeRegExp from 'escape-string-regexp';
import * as Locations from './Locations';
import './App.css';

class App extends Component {
  state = {
    places: [],
    query: '',
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  // Handle marker click menu click 
  onMarkerClick = (props, marker, x) => {

    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  // Handle hamburger menu click/enter key
  onHamburgerClick = (x) => {
    if (x.key === 'Enter' || !x.key) {
      const menu = document.querySelector('.hamburger');

      if (menu.getAttribute('aria-expanded') === 'true') {
        menu.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'false');
      } else {
        menu.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'true');
      }

      document.querySelector('.App-header').classList.toggle('full-width');
      document.querySelector('.map-container').classList.toggle('full-width');
      document.querySelector('#filter').classList.toggle('hidden');
    }
  }

  // Handle list item click/enter key
  onListClick = (props, x) => {
    if (x.key === 'Enter' || !x.key) {
      let clickedMarker;
      if (document.querySelectorAll('.gmnoprint map area').length !== 0) {
        clickedMarker = [...document.querySelectorAll('.gmnoprint map area')];
      } else {
        clickedMarker = [...document.querySelectorAll('.gmnoprint')];
      }
      clickedMarker = clickedMarker.find(marker => marker.getAttribute('title') === props.venue);
      clickedMarker.click();
    }
  }

  // Handle map click
  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  // Update searching query
  updateQuery = (query) => {
    this.setState({ query: query })
  }

  // Handle errors from map
  handleMapErrors = () => {

    window.gm_authFailure = function () {
      document.querySelector('.map-container').innerHTML = `
        <div class = "error-container">
            <h3>Ooops... Something went wrong while trying to load the map!</h2>
        </div>
        `;
    }

    setTimeout(function () {
      if (document.querySelector('.gm-err-container')) {
        const errorContainer = document.querySelector('.gm-err-container');
        const message = document.querySelector('.gm-err-message').innerText;
        errorContainer.innerHTML = `
          <div class = "error-container">
            <h3>Something went wrong while trying to load the map!</h2>
            <div class = "error-message">${message}</div>
          </div>
        `;
      }

      if (!document.querySelector('#map')) {
        document.querySelector('.map-container').innerHTML = `
        <div class = "error-container">
            <h3>Something went wrong while trying to load the map!</h2>
        </div>
        `;
      }
    }, 1500);
  }

  // Handle errors from FourSquareAPI
  handleFourSquareErrors = (error) => {
    const errorContainer = document.querySelector('.list');
    errorContainer.innerHTML = `
          <div class = "error-container">
            <h3>Something went wrong while trying to get places!</h2>
            <div class = "error-message">${error}</div>
          </div>
        `;
  }

  // Get data from FourSquareAPI and call error handlers
  componentDidMount() {
    Locations.get().then(places => {
      this.setState({ places })
    })
      .catch(error => this.handleFourSquareErrors(error))
      .then(this.handleMapErrors())
  }

  render() {

    let showPlaces;
    if (!this.state.query) {
      showPlaces = this.state.places;

    } else {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showPlaces = this.state.places.filter((place) => match.test(place.venue.name))
    }

    return (
      <div className="App">
        <Filter className="list-item"
          query={this.state.query}
          updateQuery={this.updateQuery}
          places={showPlaces}
          onListClick={this.onListClick}
        />
        <Header
          onHamburgerClick={this.onHamburgerClick}
        />
        <div className="map-container">
          <GMap
            places={showPlaces}
            onMarkerClick={this.onMarkerClick}
            activeMarker={this.state.activeMarker}
            showingInfoWindow={this.state.showingInfoWindow}
            selectedPlace={this.state.selectedPlace}
          />
        </div>
      </div>
    );
  }
}
export default App