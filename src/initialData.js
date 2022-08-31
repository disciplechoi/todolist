import taskData from "./taskData";

const initialData = {
    tasks : {
        'task-1' : {id: 'task-1', name: "Reading" , count : 0}, 
        'task-2' : {id:'task-2' ,name: "Writing" , count : 0}, 
        'task-3' : {id:'task-3' ,name: "수영하기" , count : 0} 
    },

    // tasks : [
    //     {id: 'task-1', name: "Reading" , count : 0}, 
    //     {id:'task-2' ,name: "Writing" , count : 0}, 
    //     {id:'task-3' ,name: "수영하기" , count : 0} 
    // ],

    columns: {
        'column-1' : {
        id: 'column-1',
        title: 'To do',
        // taskIds: taskData,
        taskIds : ['task-1', 'task-2', 'task-3']
        },

        'column-2' : {
        id: 'column-2',
        title: 'In progress',
        taskIds:[],
        },

      
        'column-3' : {
        id: 'column-3',
        title: 'Completed',
        taskIds:[],
        },       
    },


    columnOrder: ['column-1', 'column-2', 'column-3']
}

export default initialData;