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
                    onKeyPress={(x) => { this.props.onHamburgerClick(x) }}
                    onClick={(x) => { this.props.onHamburgerClick(x) }}
                    className="hamburger"
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                > 
                &#9776;
                </div>
                <h1 className="App-title">Neighborhood Map of Budapest</h1>
                <div></div>
            </header>
        )
    }
}

export default Header