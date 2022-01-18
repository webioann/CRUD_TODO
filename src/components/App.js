import React,{ useState} from 'react';
import { items } from '../data/dataItems';
import ListItems from './ListItems';
import Input from './Input';
import './app.less'

function App() {
    // const [todos,setTodos] = useState(items)
    const [todos,setTodos] = useState(JSON.parse(localStorage.getItem('TODOS')))
    const [inputValue,setInputValue] = useState('')

    const update = (updatedTodos) => {
        setTodos(updatedTodos)
        localStorage.setItem('TODOS',JSON.stringify(updatedTodos))    
    }

    const checkTodo = (id) => {
        let updatedTodos = todos.map(todo => todo.id === id ? {...todo,checked: !todo.checked} : todo)
        update(updatedTodos)
    }
    const deleteTodo = (id) => {
        let updatedTodos = todos.filter(todo => todo.id !== id )
        update(updatedTodos)
    }
    const addNewTodo = (todo) => {
        let id = todos.length ? todos[todos.length - 1].id + 1 : 1;
        let newTodo = { id,checked: false,todo}
        let updatedTodos = [...todos,newTodo]
        update(updatedTodos)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(!inputValue) return;
        setInputValue('');
        addNewTodo(inputValue)
    }

    return (
        <div className='container'>
            <Input
                inputValue={inputValue}
                setInputValue={setInputValue}
                onSubmit={onSubmit}
            />
            <ListItems 
                todos={todos}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}

export default App
