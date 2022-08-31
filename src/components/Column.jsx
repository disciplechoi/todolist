import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './Task';
import AddTask from './AddTask';
// import HabitAddForm from './HabitAddForm';

const Container = styled.div`
    margin: 8px;
    width: 350px;
    // border: 1px solid lightgrey;
    // border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
    font-weight: 700;
    font-size: 20px;

`;
const TaskList = styled.div`
    padding: 8px;
`;
 

class Column extends Component {

    handleAdd=(task)=>{
        this.props.handleAdd(task);
    }

    // name = this.props.tasks.map(task=>task.name);

    render() {
        return (
            <Container>
                <div className="column_title">
                    <Title>
                        {this.props.column.title}
                    </Title>
                    {this.props.column.id === 'column-1' ? <button className="btn-add  text-white font-bold px-4 rounded-full">+ Add Task</button> : <></>}
                </div>
                
                {/* {this.props.column.id === 'column-1' ? <AddTask handleAdd={this.handleAdd} /> : <></>} */}


            
                <Droppable droppableId={this.props.column.id} key={this.props.column.id}>
                    {(provided)=>(
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                         {
                            this.props.tasks.map((task, index)=>
                            // {console.log(task.id)}
                            <Task key={task.id} task={task} index={index}/>
                            )
                         }
                         {provided.placeholder}
                        </TaskList>
                    )}
               
                </Droppable>
            </Container>
            
        )
    }
}

export default Column;