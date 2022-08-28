import React, { Component } from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';
import { DragDropContext } from 'react-beautiful-dnd';

class Habits extends Component {
    
    handleIncrement = (habit) =>{
       
        this.props.handleIncrement(habit);
    }

    handleDecrement = (habit) =>{
       this.props.handleDecrement(habit);
    }

    handleDelete=(habit)=>{
        this.props.handleDelete(habit);
        
    }

    handleAdd=(habit)=>{
        this.props.handleAdd(habit);
    }


    render() {
        return (
            <>
                  {/* <HabitAddForm handleAdd={this.handleAdd}/> */}
                  <ul>
                     {this.props.habits.map((habit) => (
                      <li className="habit drop-shadow-md" key={habit.id} >
                        <Habit habit={habit} 
                      handleIncrement ={this.handleIncrement} handleDecrement={this.handleDecrement} handleDelete={this.handleDelete}
                      />
                      </li>))}
                  </ul>
            </>
        );
    }
}

export default Habits;