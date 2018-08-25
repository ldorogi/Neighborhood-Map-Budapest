import React, { Component } from 'react';
import ListItem from './ListItem';

class Filter extends Component {
	render() {
		return (
			<nav id="filter">
				<h2>Places in Budapest</h2>
				Filter: <input
					tabIndex={3}
					role='searchbox'
					aria-label='search places'
					type="text"
					placeholder="Search for places"
					value={this.props.query}
					onChange={(event) => this.props.updateQuery(event.target.value)}
				/>
				<ul aria-label='places list' className="list">
					{this.props.places.map(place =>
						<ListItem key={place.referralId}
							referralId={place.referralId}
							venue={place.venue.name}
							onListClick={this.props.onListClick}
						>
						</ListItem>
					)}
				</ul>
			</nav>
		)
	}
}

export default Filter