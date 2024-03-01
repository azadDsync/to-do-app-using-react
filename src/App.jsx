import AppName from "./components/AppName"
import AddTask from "./components/AddTask"
import Task from "./components/Task";
import "./App.css";
import { useState } from "react";

function App() {
 
  const [getVal,setVal]=useState([])

  let bool=false;
  function onClicked(a,b){
       if (a) {
        const newAddTask= [...getVal,{task1:a,date1:b},];

        setVal(newAddTask);
       }else{
        alert("Enter a Task atleast 😬")
       }
        console.log(a+b);
       
  } 
  
  function deleted(a,b) {
    console.log(a+""+b);
    const newAddTask =getVal.filter(x=>a !==x.task1 );
    setVal(newAddTask);
  }
                
  return <center>
    <div className="box">
    <center className="to-do-container">
      <AppName></AppName>
      
      <AddTask clicked={onClicked}></AddTask>
     
      {getVal.length===0 && <p>Enjoy Your Day 😄</p>}
      <Task key={getVal} stack1={getVal} deleted={deleted}></Task>
    </center>
  </div>
  </center>
    
}

export default App
  