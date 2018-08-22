import React, { Component } from 'react';

class ListItem extends Component {
	render() {
		return (
			<li className="list-item"
				tabIndex={3}
				role="button"
				onKeyPress={(e) => { this.props.onListClick(this.props, e) }}
				onClick={(e) => { this.props.onListClick(this.props, e) }}
				key={this.props.referralId}
				>
				{this.props.venue}
			</li>
		)
	}
}

export default ListItem