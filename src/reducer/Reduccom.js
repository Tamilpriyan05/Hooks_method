import React from 'react'
import { useReducer } from 'react'
import { Actions } from './reducerfun'
import { reducer } from './reducerfun'

const Reduccom = () => {

    const [state,dispatch]=useReducer(reducer,{count:0})

     const increment=()=>{
             dispatch({type:Actions.INCREMENT})
     }
     const decrement=()=>{
           dispatch({type:Actions.DECREMENT})
     }
  return (
    <div>
        <h1>Reducer hooks</h1>
        <h3>{state.count}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Reduccom