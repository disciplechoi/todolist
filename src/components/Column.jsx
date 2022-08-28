import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './Task';
import AddTask from './AddTask';
// import HabitAddForm from './HabitAddForm';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
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
                <Title>
                    {this.props.column.title}
                </Title>
                {this.props.column.id === 'column-1' ? <AddTask handleAdd={this.handleAdd} /> : <></>}


            
                <Droppable droppableId={this.props.column.id}>
                    {(provided)=>(
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                         {
                            this.props.tasks.map((task, index)=>
                            <Task key={task.id} task={task} index={index}></Task>)
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