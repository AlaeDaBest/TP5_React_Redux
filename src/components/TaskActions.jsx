import React from "react";
import { useDispatch } from "react-redux";
import *  as ActionCreators from '../Redux/ActionCreators'
const TaskActions=(props)=>{
    const dispatch=useDispatch();
    return(
        <div>
            <input type="button" value="Delete All Tasks" onClick={()=>{
                props.setCompletedTasks(0)
                dispatch(ActionCreators.delete_all_tasks())}} />
            <input type="button" value="Delete Completed Tasks" onClick={()=>{
                props.setCompletedTasks(0)
                dispatch(ActionCreators.delete_completed_tasks())}} />
            <input type="button" value="Delete Uncompleted Tasks" onClick={()=>dispatch(ActionCreators.delete_uncompleted_tasks())} />
            <input type="button" value="Mark All Tasks As Complete" onClick={()=>{
                props.setCompletedTasks(props.tasks.length)
                dispatch(ActionCreators.mark_all_tasks_as_complete())}} />
        </div>
    )
}
export default TaskActions;