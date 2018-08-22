import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_MAP_KEY } from './Keys';

class GMap extends Component {
	render() {
		const { google, places, onMarkerClick, activeMarker, showingInfoWindow, selectedPlace} = this.props;

		return (
			<div role="application" id="map">
				<Map google={google}
					initialCenter={{ lat: 47.507338, lng: 19.045648 }} 
					zoom={15}
					onClick={this.onMapClicked}>
					{places.map(place =>
						<Marker
							key={place.referralId}
							id={place.referralId}
							name={place.venue.name}
							title={place.venue.name}
							description={place.venue.location.address}
							onClick={onMarkerClick}
							position={{ lat: place.venue.location.lat, lng: place.venue.location.lng }}
							animation={Object.keys(activeMarker).length ?
								(place.referralId === activeMarker.id ? '1' : '0') : '0'}
						/>
					)}
					<InfoWindow
						marker={activeMarker}
						visible={showingInfoWindow}>
						<div>
							<h1 tabIndex={'0'}>{selectedPlace.name}</h1>
							<p tabIndex={'0'}><b>Street:</b> {selectedPlace.description}</p>
						</div>
					</InfoWindow>
				</Map>
			</div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: (GOOGLE_MAP_KEY)
})(GMap)