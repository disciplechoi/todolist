import React,{ Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
// import Habits from './components/Habits';
// import Header from './components/Header';
import initialData from './initialData';
import Column from './components/Column';
import taskData from './taskData';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;



//import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// let count = 1;

class App extends Component {
    state = {
      initialData : initialData,
      taskData : taskData
    };

//  handleIncrement = (habit) =>{
//   const habits = [...this.state.habits];
//   const index = habits.indexOf(habit);
//   habits[index].count++;
//   this.setState({habits: habits});
// }

// handleDecrement = (habit) =>{
//   // console.log(habit);
//   const habits = [...this.state.habits];
//   const index= habits.indexOf(habit);
//   const count = habits[index].count -1; 
//   habits[index].count = count < 0? 0 : count;
//   this.setState(habits); //괄호 안했는데도 정상 동작함. 이 부분 궁금.
//   // this.setState({count : count<0 ? 0 : count-1});
// }

// handleDelete=(habit)=>{
//   const habits = this.state.habits.filter(item=> item.id !== habit.id);
//   this.setState({habits});
  
// }

handleAdd=(task)=>{
 
  const tasks = [...this.state.taskData,{id: Date.now().toString(), name:task, count: 0} ];
 
  this.setState({taskData : tasks});
  this.setState(initialData.columns['column-1'].taskIds = tasks);

}

onDragEnd = result => {
  const {destination, source, draggableId} = result;

  // console.log("destination : " + JSON.stringify(destination));
  // console.log("source :  "+ JSON.stringify(source));
  // console.log("draggableId "+ draggableId);

  if(!destination) return;
  
  if(
      destination.droppableId === source.droppableId&&
      destination.index === source.index
  ) return ;
  

  const column = this.state.initialData.columns[source.droppableId];
  //console.log("column : " + JSON.stringify(column));

  const newTaskIds = Array.from(column.taskIds);
  // console.log("newTaskIds : (1)" + JSON.stringify(newTaskIds));
  newTaskIds.splice(source.index, 1);
  // console.log("newTaskIds : (2)" + JSON.stringify(newTaskIds));
  newTaskIds.splice(destination.index, 0, this.state.taskData.filter(task => task.id === draggableId));
  
  // console.log( this.state.taskData.filter(task => task.id === draggableId));

  // const newColumn = {
  //     ...column,
  //     taskIds: newTaskIds,
  // };

  console.log("newTaskIds : " + JSON.stringify(newTaskIds));

  // const newState = {
  //     ...this.state,
  //     columns: {
  //         ...this.state.columns,
  //         [newColumn.id] : newColumn,
  //     },
  // };

  // this.setState(newState);

  
  this.setState(initialData.columns['column-1'].taskIds = newTaskIds);
  this.setState({taskData : newTaskIds});
  console.log("newTaskIds : " + JSON.stringify(this.state.taskData));
  // console.log("final : "+ JSON.stringify(this.state.taskData));
  // console.log("final : "+ JSON.stringify(initialData.columns['column-1'].taskIds = newTaskIds));
  // this.setState(initialData.columns['column-1'].taskIds = newTaskIds);
}



  render(){
    return (
      <Container>
        <DragDropContext
            onDragEnd={this.onDragEnd}
        >
          {this.state.initialData.columnOrder.map((columnID, index) => {
              const column = this.state.initialData.columns[columnID];
          
            // return이 있어야지 동작한다 왜? 
            return <Column key={column.id} index={index} column={column} tasks={column.taskIds} handleAdd={this.handleAdd}/>
            })
          }
        </DragDropContext>
        </Container> 

      // <div className="App">
      //   {this.state.columnOrder.map((columnId) =>(
      //     <>
      //       <div className="column">
      //         <h1>{this.state.columns[columnId].title}</h1>
      //         {this.state.columns[columnId].taskIds.map((taskIds)=>(
      //           <DragDropContext
      //              onDragEnd={this.onDragEnd}
      //           >
      //              <Habits habits={this.state.habits}
      //               handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} handleDelete={this.handleDelete}
      //               handleAdd={this.handleAdd} 
      //               columns={this.state.columns}
      //               />
      //           </DragDropContext>
      //         ))}
      //       </div>
      //     </>
   
      //   )
      //  )
      //   }  
      //     {/* <Header ongoingHabits={this.state.habits.filter(item => item.count>0).length}/> */}
      // </div>
    )
  }
}

export default App;