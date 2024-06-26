import React, { useState } from 'react'
import { useContext } from 'react'
import { userContext } from '../App'

const Parent = () => {
   const [count,setCount]=useState(0)
    const click=useContext(userContext)
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={click.value1} >
              +
        </button>
        <button onClick={click.decrese(count)} >
              -
        </button>
    </div>
  )
}

export default Parent