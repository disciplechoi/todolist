import React, { Component } from 'react';
import Habit from './Habit';
class Habits extends Component {
    state = {
       habits : [{id: 1, name: "Reading" , count : 0}, {id:2 ,name: "Writing" , count : 0}, {id:3 ,name: "Reading" , count : 0} ]
    }

    handleIncrement = (habit) =>{
        // this.setState({count : this.state.count+1});
        console.log(JSON.stringify(habit));
    }

    handleDecrement = (habit) =>{
        const count = this.state.count -1; 
        this.setState({count : count<0 ? 0 : count-1});
    }

    handleDelete=(habit)=>{
        
    }


    render() {
        return (
            <div>
                {this.state.habits.map((habit) => (
                      <Habit key={habit.id} habit={habit} 

                      handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} handleDelete={this.handleDelete}
                      
                      />
                    //   <p>{habit.name} </p>         
            ))}
            </div>
        );
    }
}

export default Habits;