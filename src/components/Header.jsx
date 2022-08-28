import React, { Component } from 'react';
import HabitAddForm from './HabitAddForm';

class Header extends Component {
    render() {
        return (
            <>
                <div class="title">
                    <h1>To do({this.props.ongoingHabits})</h1>
                    <HabitAddForm handleAdd={this.handleAdd}/>
                </div>
               
                {/* <h2>Ongoing : {this.props.ongoingHabits}</h2> */}
            </>
        );
    }
}

export default Header;