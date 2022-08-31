import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 7px;
`;

class Task extends Component {
    

    render() {
        return (
            <Draggable key={this.props.task.id} draggableId={this.props.task.id} index={this.props.index} >
              
                {(provided)=> (
                    //   <Container
                      <div className="task"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}>
                      {this.props.task.name}
                      </div>
                    //   </Container>
                )}
          
            </Draggable>
        )
    }
}

export default Task;