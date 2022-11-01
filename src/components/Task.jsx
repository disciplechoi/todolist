import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Container = styled.div`
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 7px;
`;




class Task extends Component {
   
    inputRef = React.createRef();

    handleAdd=()=>{
        this.props.handleAdd();
    }

    handleSave=(taskName)=>{
        this.props.handleSave(taskName);
    }

    getTaskName=(event)=> {
        event.preventDefault();
        const name=this.inputRef.current.value;
        //console.log("from task : " + name);
        name&&this.handleSave(name);

        // this.inputRef.current.value='';  
        //arrow function을 쓰지 않으면 this.inputRef를 찾지 못하는 현상 발생. 이해가 안됨. 
      }

      state= {
        task : this.props.task.name,
      }

      handleChange = this.handleChange.bind(this);

      handleChange(event) {
        console.log(event.target.value);
        this.setState({task: event.target.value});
      }

    render() {
        return (
            <Draggable key={this.props.task.id} draggableId={this.props.task.id} index={this.props.index} >
              
                {(provided)=> (
                    //   <Container
                      <div className="task"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}>
                    
                         <input ref={this.inputRef} type="text" placeholder="Task"
                            value={this.state.task} onChange={this.handleChange}
                         />
                      {/* {this.props.task.name == "" ? 
                         <>
                            <input ref={this.inputRef} type="text" placeholder="Task"  
                            />
                        {/* <Button variant="outlined"
                        onClick={this.getTaskName}
                        >Save</Button> */}
                        
                        
                     
                        {/* <input type="text" value={this.task}
                        onFocus={(e)=> {e.target.select()}}
                        onChange={this.handleChange}
                        /> */}
                      
                      </div>
                    //   </Container>
                )}
          
            </Draggable>
        )
    }
}

export default Task;