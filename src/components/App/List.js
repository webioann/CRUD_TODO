import React from 'react';
import Todo from './Todo';
import EmptyTodo from './EmptyTodo';
import './list.less'

function List({ todos,checkTodo,deleteTodo }) {

    return (
        <ul className='list'>
            {(todos.length > 0) ? (
                <Todo 
                    todos={todos}
                    checkTodo={checkTodo}
                    deleteTodo={deleteTodo}
                />
            ) : (
                <EmptyTodo/>
            )}
        </ul>
    )
}
export default List;
