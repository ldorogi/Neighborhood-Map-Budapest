import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <div
                    aria-expanded="true"
                    role="button"
                    aria-label="toggle menu"
                    tabIndex={1}
                    onKeyPress={(e) => { this.props.onHamburgerClick(e) }}
                    onClick={(e) => { this.props.onHamburgerClick(e) }}
                    className="hamburger"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                > 
                &#9776;
                </div>
                <h1 className="App-title">Neighborhood Map</h1>
                <div></div>
            </header>
        )
    }
}

export default Header