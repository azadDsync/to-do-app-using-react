import { useState } from "react";

function AddTask({clicked}) {

    const [addTask,setTask] = useState()
    const [addDate,setDate] = useState()

    function funTask(event) {
        setTask(event.target.value);
        
    }
    function funDate(event) {
        setDate(event.target.value);
    }

    function fun(){
        clicked(addTask,addDate);
        setTask('');
        setDate('');
    };

    return <div className="container text-center">
    <div className="row my-row">
       <div className="col-6">
        <input type="text" placeholder="enter your task" onChange={(event)=>{
            funTask(event)
        }}  value={addTask}/>
       </div>
       <div className="col-4">
        <input type="date" onChange={(event)=>{
            funDate(event)
        }} value={addDate}/>
       </div>
       <div className="col-2">
       <button type="button " className="btn btn-success my-button" onClick={fun}>Add</button>
       </div>
    </div>
    </div>
}

export default AddTask;