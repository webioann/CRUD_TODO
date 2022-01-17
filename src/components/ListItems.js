import React from 'react';
import Todo from './Todo';
import EmptyTodo from './EmptyTodo';
import './list-items.less'

function ListItems({ todos,checkTodo,deleteTodo}) {

    if (todos.length > 0) {
        return (
            <ul className='list'>
                <Todo 
                    todos={todos}
                    checkTodo={checkTodo}
                    deleteTodo={deleteTodo}
                />
            </ul>
        )
    }
    else{
        return (
            <ul className='list'>
                    <EmptyTodo/>
            </ul>
        )
    }
}

export default ListItems
