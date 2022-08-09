import React, { Component } from 'react';

class Habit extends Component {
    handleIncrement = () =>{
        this.props.handleIncrement(this.props.habit);
      
    }

    handleDecrement = () =>{
        this.props.handleDecrement(this.props.habit);
    }

    handleDelete=()=>{
        this.props.handleDelete(this.props.habit);
    }

   
 
    render() {
        const {name, count} = this.props.habit
        return (
            <div>
                {/* <p>{this.props.habit}</p> */}
                <li className="habit">
                    <span className="habit-name">{name}</span>
                   <span className="habit-count">{count}</span>
                   <button className="habit-button habit-increase" onClick={this.handleIncrement}><i className="fas fa-plus-square"></i></button>
                   <button className="habit-button habit-decrease" onClick={this.handleDecrement}><i className="fas fa-minus-square"></i></button>
                   <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                   </button>


                </li>

                
            </div>
        );
    }
}

export default Habit;