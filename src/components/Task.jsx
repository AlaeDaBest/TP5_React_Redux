import React from "react";
import { useDispatch } from "react-redux";
import * as ActionCreators from '../Redux/ActionCreators';
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
const Task=(props)=>{
    const dispatch=useDispatch();
    return(
        <div className="Task">
            <article className="checkbox-article">
                <input type="checkbox" name="" id="" onChange={()=>{
                    dispatch(ActionCreators.toggle_complete(props.id))
                    props.setCompletedTasks(props.completed? props.completedTasks -1 :props.completedTasks +1)
                    }} checked={props.completed} />
                <p>{props.task}</p>
            </article>
            <article className="Icons">
                    <FaEdit className="Edit" onClick={()=>{
                    var taskToModify={
                        id:props.id,
                        task:props.task
                    }
                    props.setTaskToModify(taskToModify)
                    }} />
                    <FaTrashAlt className="Trash" onClick={()=>{
                    if(props.completed){
                        props.setCompletedTasks(props.completedTasks-1)
                    }
                    dispatch(ActionCreators.delete_task(props.id))}} />
            </article>
        </div>
    )
}
export default Task;