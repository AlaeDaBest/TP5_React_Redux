import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import AddTask from "./AddTask";
import Task_Completed from "./TaskCompleted";
import TaskActions from "./TaskActions";
const ListTasks=()=>{
    const tasks=useSelector(state=> state.tasks)
    const completTasks=tasks.filter((task)=>task.completed===true)
    const [completedTasks,setCompletedTasks]=useState(completTasks.length)
    const [taskToModify,setTaskToModify]=useState(null)
    return(
        <div className="Container">
            <h1>List Todo</h1>
            <article>
                <AddTask tasks={tasks} taskToModify={taskToModify} setTaskToModify={setTaskToModify} />
            </article>
            <article>
                {tasks.map((task)=>(
                    <Task key={task.id} taskToModify={taskToModify} setTaskToModify={setTaskToModify} id={task.id} task={task.task} completed={task.completed} tasks={tasks} setCompletedTasks={setCompletedTasks} completedTasks={completedTasks}  />
                ))}
            </article>
            <article>
                <Task_Completed tasks={tasks} completedTasks={completedTasks} />
            </article>
            <article>
                <TaskActions setCompletedTasks={setCompletedTasks} tasks={tasks} />
            </article>
        </div>
    )
}
export default ListTasks;