import React from 'react';
import './input.less'

function SearchTodo({ searchValue,setSearchValue }) {
    
    return (
        <form className='form' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                id='search'
                placeholder='search todo'
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
        </form>
    )
}

export default SearchTodo
