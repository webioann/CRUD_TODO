import React from 'react';
import { MdOutlineCheckBoxOutlineBlank,MdOutlineCheckBox } from 'react-icons/md'
import { CgTrash } from 'react-icons/cg'
import './todo.less'

function Todo({ todos,checkTodo,deleteTodo}) {

    return (
        <>
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
        </>
    )
}

export default Todo
