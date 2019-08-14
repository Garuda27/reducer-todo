import React from 'react';

const Todo = (props) =>{
    return(
        <ul className={`task${props.task.completed ? " completed" : '' }`}
        onClick={() => {
            props.dispatch({type:"TOGGLE_TODO", payload:props.task.id})
        }}
        >
            <p>{props.task.task}</p>
        </ul>
    )
}

export default Todo;