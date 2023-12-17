import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter =15;
  let [counter,setCounter]= useState(15);

  const AddCount =()=>{
    // console.log("hello",Math.random());
    // counter=counter+1;
    // console.log(counter);
    if(counter<20){
      setCounter(counter+1);
    }
    
  };

  const RemoveCount =()=>{
    if(counter>0){

      setCounter(counter-1);

    }
  };
  return (
    <>
      <h1>Counter project</h1>
      <p>Count value :- {counter} </p>
      <button onClick={AddCount}>Add Count</button> &nbsp;
      <button onClick={RemoveCount}>Remove Count</button>
    </>
  )
}

export default App
