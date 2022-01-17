import React,{ useState} from 'react';
import { items } from '../data/dataItems';
import ListItems from './ListItems';
import './app.less'

function App() {
    return (
        <div className='container'>
            <ListItems items={items}/>
        </div>
    )
}

export default App
