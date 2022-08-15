import React,{ Component } from 'react';
import './App.css';
import Habits from './components/Habits';
import Header from './components/Header';

class App extends Component {
  state = {
    habits : [{id: 1, name: "Reading" , count : 0}, {id:2 ,name: "Writing" , count : 0}, {id:3 ,name: "Reading" , count : 0} ],
   
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
  const habits = this.state.habits.filter(item=> item.id !== habit.id);
  this.setState({habits});
  
}

handleAdd=(habit)=>{
  const habits = [...this.state.habits,{id: Date.now(), name:habit, count: 0} ];
  this.setState({habits});
}

 

  render(){
    return (
      <div className="App">
       
         <Header ongoingHabits={this.state.habits.filter(item => item.count>0).length}/>
       
         <Habits habits={this.state.habits}
          handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} handleDelete={this.handleDelete}
          handleAdd={this.handleAdd}
          />
      </div>
    )
  }
}

export default App;
