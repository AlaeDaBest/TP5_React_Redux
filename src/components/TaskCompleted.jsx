import React from "react";
const Task_Completed=(props)=>{
    return(
        <div>
            <p>{props.completedTasks} of {props.tasks.length}</p>
        </div>
    )
}
export default Task_Completed;