import React, { useMemo, useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    const [number,setNumber]=useState(1)

    const fratorial=(n)=>{
        console.log('memo function')
        console.log(n)
    }

    useMemo(()=>{
          fratorial(number)
    },[number])
       
  return (
    <div>
        <h1>Use memo</h1>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>

        <div>
            <h3>memo</h3>
            <input type='number' onChange={(e)=>setNumber(e.target.value)} />
        </div>
    </div>
  )
}

export default Counter