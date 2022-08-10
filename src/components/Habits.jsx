import React, { Component } from 'react';
import Habit from './Habit';
class Habits extends Component {
    state = {
       habits : [{id: 1, name: "Reading" , count : 0}, {id:2 ,name: "Writing" , count : 0}, {id:3 ,name: "Reading" , count : 0} ]
    }

    handleIncrement = (habit) =>{
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits: habits});
    }

    handleDecrement = (habit) =>{
        // console.log(habit);
        const habits = [...this.state.habits];
        const index= habits.indexOf(habit);
        const count = habits[index].count -1; 
        habits[index].count = count < 0? 0 : count;
        this.setState(habits); //괄호 안했는데도 정상 동작함. 이 부분 궁금.
        // this.setState({count : count<0 ? 0 : count-1});
    }

    handleDelete=(habit)=>{
        const habits = this.state.habits.filter(item=> item.id != habit.id);
        this.setState({habits});
        
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