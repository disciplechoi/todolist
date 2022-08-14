import React, { Component } from 'react';
import Habit from './Habit';
class Habits extends Component {
    // state = {
    //    habits : [{id: 1, name: "Reading" , count : 1}, {id:2 ,name: "Writing" , count : 2}, {id:3 ,name: "Reading" , count : 0} ]
    // }
// 
    handleIncrement = (habit) =>{
        // const habits = [...this.props.habits];
        // const index = habits.indexOf(habit);
        // habits[index].count++;
        // this.setState({habits: habits});
        this.props.handleIncrement(habit);
    }

    handleDecrement = (habit) =>{
       this.props.handleDecrement(habit);
    }

    handleDelete=(habit)=>{
        this.props.handleDelete(habit);
        
    }


    render() {
        return (
            <>
                {this.props.habits.map((habit) => (
                      <Habit key={habit.id} habit={habit} 
                      handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} handleDelete={this.handleDelete}
                      
                      />
                    //   <p>{habit.name} </p>         
            ))}
            </>
        );
    }
}

export default Habits;