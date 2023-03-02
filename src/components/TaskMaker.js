import React from 'react';
import Tasks from './Tasks';

export default function TaskMaker () {
    const handleEdit = () => {

    }

    const handleDelete = () => {

    }




    return (
        <div className="card text-center">
            <Tasks
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            />
        </div>
    )
    }