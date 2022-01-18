import React,{ useState,useEffect } from 'react';
// import { todos } from '../data/todoData';
import List from './List';
import Todo from './Todo';
import EmptyTodo from './EmptyTodo';

import Input from './Input';
import SearchTodo from './SearchTodo';
import './app.less'

function App() {

    const [todos,setTodos] = useState(JSON.parse(localStorage.getItem('TODOS')) ||[]);
    const [inputValue,setInputValue] = useState('');
    const [searchValue,setSearchValue] = useState('');
    const URL = 'http://localhost:7007/todos'

    useEffect(() => {
        localStorage.setItem('TODOS',JSON.stringify(todos));
    },[todos])

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    const checkTodo = (id) => {
        let updatedTodos = todos.map(todo => todo.id === id ? {...todo,checked: !todo.checked} : todo);
        setTodos(updatedTodos)
    }
    const deleteTodo = (id) => {
        let updatedTodos = todos.filter(todo => todo.id !== id );
        setTodos(updatedTodos)
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
            <List 
                todos={todos.filter(todo => ((todo.todo).toLowerCase()).includes(searchValue.toLowerCase()))}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}

export default App
    // useEffect(() => {
    //     fetch( URL )
    //     .then((response) => response.json())
    //     .then(({results}) => {
    //         setTodos(results)        
    //         setError(null)
    //         setLoading(false)
    //     })
    //     .catch ((error) => { 
    //         setError(true)
    //         console.error('ERROR',error) })
    //     .finally(() => {setLoading(false)})


        // const fetchData = async () => {
        //     try {
        //         const response = await fetch(URL);
        //         // if (!response.ok) throw Error('CATCH ERROR');
        //         const data = await response.json();
        //         setTodos(data);
        //         console.log(`DATA --> ${data}`);
        //         // setLoading(false);
        //         // setError(null);
        //     } catch (err) {
        //         console.log(`ERROR --> ${err.stack}`);
        //         // setError(err.message);
        //     }
        //     //  finally {
        //     //     setLoading(false);
        //     // }
        // }
        // (async () => await fetchData())();
        // fetchData()
    // }, [])
