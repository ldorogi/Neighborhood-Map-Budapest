import React, { Component } from 'react';

class ListItem extends Component {
	render() {
		return (
			<li className="list-item"
				tabIndex={3}
				role="button"
				onKeyPress={(x) => { this.props.onListClick(this.props, x) }}
				onClick={(x) => { this.props.onListClick(this.props, x) }}
				key={this.props.referralId}
				>
				{this.props.venue}
			</li>
		)
	}
}

export default ListItem