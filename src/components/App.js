import React,{ useState} from 'react';
import { items } from '../data/dataItems';
import ListItems from './ListItems';
import './app.less'

function App() {
    const [todos,setTodos] = useState(items)

    const checkTodo = (id) => {
        let clicked = todos.map(todo => todo.id === id ? {...todo,checked: !todo.checked} : todo)
        setTodos(clicked)
        localStorage.setItem('TODOS',JSON.stringify(clicked))    
    }
    const deleteTodo = (id) => {
        let deleted = todos.filter(todo => todo.id !== id )
        setTodos(deleted)
        localStorage.setItem('TODOS',JSON.stringify(deleted))    
    }

    return (
        <div className='container'>
            <ListItems 
                todos={todos}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}

export default App
