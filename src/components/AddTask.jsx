import React, { Component } from 'react';




class AddTask extends Component {

    inputRef = React.createRef();
    
    handleSubmit=(event)=> {
      event.preventDefault();
      const name=this.inputRef.current.value;
      name&&this.props.handleAdd(name);
      this.inputRef.current.value='';  
      //arrow function을 쓰지 않으면 this.inputRef를 찾지 못하는 현상 발생. 이해가 안됨. 
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input ref={this.inputRef} type="text" placeholder="Task"/>
             <input type="submit" className="btn-add bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" value="Add a task" />
        </form>
        );
    }
}

export default AddTask;