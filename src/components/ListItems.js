import React,{ useState } from 'react';
import { MdOutlineCheckBoxOutlineBlank,MdOutlineCheckBox } from 'react-icons/md'
import { CgTrash } from 'react-icons/cg'

import './list-items.less'

function ListItems({ items}) {

    const [todos,setTodos] = useState(items)

    const checkTodo = (id) => {
        let clicked = todos.map(todo => todo.id === id ? {...todo,checked: !todo.checked} : todo)
        setTodos(clicked)    
    }
    const deleteTodo = (id) => {
        let deleted = todos.filter(todo => todo.id !== id )
        setTodos(deleted)    
    }


    return (
        <ul className='list'>
            {todos.map(todo => (
                <li className='item'
                    key={todo.id}>
                    {todo.checked 
                        ? <MdOutlineCheckBox 
                            className='icon'
                            onClick={() => checkTodo(todo.id)}
                            /> 
                        : <MdOutlineCheckBoxOutlineBlank 
                            className='icon'
                            onClick={() => checkTodo(todo.id)}
                            />}
                    <h1 className={!todo.checked ? 'todo' : 'todo-through'}>{todo.todo}</h1>
                    <CgTrash 
                        className='icon'
                        onClick={() => deleteTodo(todo.id)}
                        />
                </li>
            ))}
        </ul>
    )
}

export default ListItems
