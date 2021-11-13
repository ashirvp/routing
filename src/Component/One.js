import React,{useContext} from 'react'
import {AppContext} from '../AppContext'

function One(props) {
    const {data} =useContext(AppContext)
    return (
        <div style={{backgroundColor:'yellow',width:'50%'}}>
        <h1>One {data}</h1>
    </div>
    )
}

export default One
