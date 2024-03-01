import Item from "./Item";
import style from "./Task.module.css"
function Task({stack1,deleted}){

    return <>
    <div className={style.itemsContainer}>
       { stack1.map((item)=>(<Item task={item.task1} date={item.date1} deleted={deleted}> </Item>))};
        
      </div>
    </>
}

export default Task;