import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter =15;
  const [counter,setCounter]= useState(15);

  const AddCount =()=>{
    // console.log("hello",Math.random());
    // counter=counter+1;
    // console.log(counter);
    if(counter<20){ // We are stoping

      // This will not update state in ui
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);


      // Set method use callback function that's why it update the state
      setCounter((prevCounter)=> prevCounter+1);
      setCounter((prevCounter)=> prevCounter+1);
      setCounter((prevCounter)=> prevCounter+1);
      setCounter((prevCounter)=> prevCounter+1);
      setCounter((prevCounter)=> prevCounter+1);

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
      <button onClick={AddCount}>Add Count {counter} </button> &nbsp;
      <button onClick={RemoveCount}>Remove Count {counter} </button>
    </>
  )
}

export default App
