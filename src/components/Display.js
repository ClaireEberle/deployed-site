import React from 'react';
import Tasks from './Tasks';


const task = [
  {
    item: 'Leave town',
    priority: 'medium',
    id: 1,
  },
  {
    item: 'BUNGEE JUMP',
    priority: 'medium',
    id: 2,
  },
  {
    item: 'see the northern lights',
    priority: 'high',
    id: 3,
  },
  {
    item: 'visit Russia',
    priority: 'low',
    id: 4,
  },
]

export default function Display() {
  return (
    <div>
      
        {task.map((todoList)=><Tasks item={todoList.item} priority={todoList.priority} key={todoList.id}/>)}
    </div>
  );
}