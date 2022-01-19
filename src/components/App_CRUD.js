import React,{ useState,useEffect } from 'react';
import Todos from './Todos';
import Input from './Input';
import SearchTodo from './SearchTodo';
import './app.less'

function App_CRUD() {

    const [inputValue,setInputValue] = useState('');
    const [searchValue,setSearchValue] = useState('');
    const [data,setData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

    useEffect(() => {
        try{
            fetch(API_URL)
            .then((response) => response.json())
            .then((results) => {
                setData(results)        
                setError(null)
                setLoading(false)
            })
        }
        catch(error){
            setError(true)
            console.error('ERROR',error) 
        }
        finally{
            setLoading(false)
        }
    },[])

    const checkTodo = (id) => {
        let updatedTodos = data.map(todo => todo.id === id ? {...todo,checked: !todo.checked} : todo);
        setData(updatedTodos)
    }
    const deleteTodo = (id) => {
        let updatedTodos = data.filter(todo => todo.id !== id );
        setData(updatedTodos)
    }
    const addNewTodo = (title) => {
        let id = data.length ? data[data.length - 1].id + 1 : 1;
        let newTodo = { id,checked: false,title}
        let updatedTodos = [...data,newTodo]
        setData(updatedTodos)
        console.log(`ADD`);
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
            <SearchTodo
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Todos 
                data={data}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}
export default App_CRUD;
