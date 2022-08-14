import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <>
                <h1>Todo</h1>
                <h2>Ongoing : {this.props.ongoingHabits}</h2>
            </>
        );
    }
}

export default Header;