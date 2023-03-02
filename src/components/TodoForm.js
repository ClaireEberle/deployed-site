import React from 'react';

import './styles/TodoForm.css';

function TodoForm () {

    return (
        <div className='todo-form'>
<form>
    <input type='text' placeholder='new item'/>
    <label for='item'>priority</label>
    <select id='item' name='item'>
        <option value='high'>High</option>
        <option value='medium'>Medium</option>
        <option value='low'>Low</option>
    </select>
    <button className='submit-btn'>Submit</button>
</form>

        </div>
    );
}

export default TodoForm;