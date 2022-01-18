import React,{ useState} from 'react';
import { items } from '../data/dataItems';
import ListItems from './ListItems';
import Input from './Input';
import './app.less'

function App() {
    const [todos,setTodos] = useState(items)
    const [inputValue,setInputValue] = useState('')

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
    const addNewTodo = (todo) => {
        let id = todos.length ? todos[todos.length - 1].id + 1 : 1;
        let newTodo = { id,checked: false,todo}
        let updatedTodos = [...todos,newTodo]
        setTodos(updatedTodos)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(!inputValue) return;
        setInputValue('');
        addNewTodo(inputValue)
        console.log(`VALUE --> ${inputValue}`);
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
