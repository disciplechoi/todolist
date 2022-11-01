import React,{ Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
// import Habits from './components/Habits';
// import Header from './components/Header';
import initialData from './initialData';
import Column from './components/Column';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    // background-color: #FFFFFF;
    // border: 1px solid #E9E7F0;
    justify-content: center;
    // align-items: center;
    border-radius: 8px;
    height: 100vh;
    // width: 90%;
    
`;


class App extends Component {
    // state = {
    //   initialData : initialData,
    //   taskData : taskData
    // };

    state = initialData;

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

handleAdd=()=>{
  
    const tag = 'task-'+Date.now().toString();
    const taskIds = this.state.columns['column-1'].taskIds.map(taskIds => taskIds);
    //console.log(newTaskIds);
    const newTaskIds = [...taskIds,tag];
    
    //도대체 setState를 어떻게 해야지 전체적으로 적용이 되는지 모르겠음.
    const newTaskList={
      ...this.state,
      tasks: {
        ...this.state.tasks,
        [tag] : {id: tag, name: "", count: 0}
      },
      columns:{
        ...this.state.columns,
        'column-1' : {
          ...this.state.columns['column-1'],
          taskIds : newTaskIds
        }
      }
    }
    this.setState(newTaskList);
  
}

handleSave=(taskName)=>{
  
    console.log("taskName" + taskName);
  
    //const tag = 'task-'+Date.now().toString();
    //const taskIds = this.state.tasks.map(taskIds => taskIds);
    const taskIds = Object.keys(this.state.tasks);
    //console.log("task last"+taskIds);
    const lastTaskIds= taskIds[Object.keys(taskIds)[Object.keys(taskIds).length - 1]];
    //console.log(lastTaskIds);
    //console.log(newTaskIds);
    //const newTaskIds = [...taskIds,tag];
    const test = {id: lastTaskIds, name: taskName, count: 0};
    console.log(test);
   
    const newTaskList={
      ...this.state,
      tasks: {
        ...this.state.tasks,
        lastTaskIds : test
      },
    }

    console.log(newTaskList);
    this.state.tasks[lastTaskIds].name = taskName;
    //this.setState({this.state.tasks[lastTaskIds].name : taskName});
    //this.setState({initialData : newTaskList});
    //console.log(JSON.stringify(this.state.tasks))

}

onDragEnd = result => {
  const {destination, source, draggableId} = result;

  // console.log("destination : " + JSON.stringify(destination));
  // console.log("source :  "+ JSON.stringify(source));
  //console.log("draggableId "+ draggableId);

  if(!destination) return;
  
  if(
      destination.droppableId === source.droppableId&&
      destination.index === source.index
  ) return ;
  

  const column = this.state.columns[source.droppableId];
  //console.log("column : " + JSON.stringify(column));

  const newTaskIds = Array.from(column.taskIds);
  // console.log("newTaskIds : (1)" + JSON.stringify(newTaskIds));
  newTaskIds.splice(source.index, 1);
  // console.log("newTaskIds : (2)" + JSON.stringify(newTaskIds));
  //newTaskIds.splice(destination.index, 0, this.state.filter(task => task.id === draggableId));
  newTaskIds.splice(destination.index, 0, draggableId);

  this.setState(this.state.columns['column-1'].taskIds = newTaskIds);
}

  render(){
    return (
      <Container>
        <DragDropContext
            onDragEnd={this.onDragEnd}
        >
          {this.state.columnOrder.map((columnID, index) => {
              const column = this.state.columns[columnID];
              const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            // return이 있어야지 동작한다 왜? 
            return <Column key={column.id} index={index} column={column} tasks={tasks} handleAdd={this.handleAdd} handleSave={this.handleSave}/>
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