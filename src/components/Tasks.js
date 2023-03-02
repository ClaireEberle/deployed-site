import React from 'react';

import './styles/Tasks.css';

function Tasks(props) {
    return (
        <div className='task-form' >

        <h3>{props.item}</h3>
        <h3>{props.priority}</h3>
        <button 
        type='button'
        className='edit-btn'
        onClick={props.handleEdit}
        >Edit</button>
        <button 
        type='button'
        className='del-btn'
        onClick={props.handleDelete}
        >Delete</button>
        </div>
    )
}

export default Tasks;