
import React, { useState } from 'react';
import './App.css';
import Reduccom from './reducer/Reduccom';
import Todocom from './reducer/Todocom';
import Counter from './usememo/Counter';
// import { counter, decrese } from './context/context';
// import Parent from './component/Parent';



// export const userContext=React.createContext()


// const value={
//      value1:counter,
//      decrese:decrese
// }

function App() {
  // const [count,setCount]=useState(0);
  return (

    <div>
        {/* <Reduccom />
        <Todocom /> */}
        <Counter />
    </div>
    // <userContext.Provider value={value} >

  
    // <div className="App">
    //        <h1>Usecontext hooks....</h1>
    //        <Parent  />
    // </div>
    // </userContext.Provider>
  );
}

export default App;
