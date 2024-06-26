import React from 'react'
import { useState,useReducer } from 'react'
import { todo } from './reducerfun'
import { Actions } from './reducerfun'
import { nanoid } from 'nanoid'


const Todocom = () => {
    const [todos,dispatch]=useReducer(todo,[])
    const [value,setValue]=useState('')

    const handlesumbit=(e)=>{
            e.preventDefault()
            // console.log(nanoid())
            dispatch({type:Actions.Todo_add , payload:{id:nanoid(),value:value,status:false}},)
            
            console.log(todos)
            setValue('')
    }
  return (
    <div>
        <h1>TODO list useing reducer</h1>

        <form onSubmit={handlesumbit}>
            <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Todocom