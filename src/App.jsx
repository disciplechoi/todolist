import React,{ Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
// import Habits from './components/Habits';
// import Header from './components/Header';
import initialData from './initialData';
import Column from './components/Column';
import taskData from './taskData';

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

  console.log("destination : " + JSON.stringify(destination));
  console.log("source :  "+ JSON.stringify(source));
  console.log("draggableId "+ draggableId);

  if(!destination) return;
  
  if(
      destination.droppableId === source.droppableId&&
      destination.index === source.index
  ) return ;
  

  const column = this.state.initialData.columns[source.droppableId];
  //console.log("column : " + JSON.stringify(column));

  const newTaskIds = Array.from(column.taskIds);
  console.log("newTaskIds : (1)" + JSON.stringify(newTaskIds));
  newTaskIds.splice(source.index, 1);
  console.log("newTaskIds : (2)" + JSON.stringify(newTaskIds));
  // newTaskIds.splice(destination.index, 0, this.state.taskData.filter(id= draggableId));
  console.log("newTaskIds : (3)" + JSON.stringify(newTaskIds));

  // const newColumn = {
  //     ...column,
  //     taskIds: newTaskIds,
  // };

  // console.log("newColumn : " + JSON.stringify(newColumn));

  // const newState = {
  //     ...this.state,
  //     columns: {
  //         ...this.state.columns,
  //         [newColumn.id] : newColumn,
  //     },
  // };

  // this.setState(newState);

  this.setState({taskData : newTaskIds});
  // this.setState(initialData.columns['column-1'].taskIds = newTaskIds);
}



  render(){
    return (
        
        <DragDropContext
            onDragEnd={this.onDragEnd}
        >
          {this.state.initialData.columnOrder.map(columnID => {
              const column = this.state.initialData.columns[columnID];
              // console.log("hello");
                //console.log(column);
              // const tasks = column.taskIds.map(taskIds => this.state.tasks[taskIds]);
              //console.log(JSON.stringify(column.taskIds))
              // const tasks = column.taskIds.map(taskIds => 
              //   taskIds.tasks
              // );
              // console.log("from App : "+ JSON.stringify(column.taskIds));
            //  const tasks = 
            return <Column key={column.id} column={column} tasks={column.taskIds} handleAdd={this.handleAdd}/>
            })
          }
        </DragDropContext>
     

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