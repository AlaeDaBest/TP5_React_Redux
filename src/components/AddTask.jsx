import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as ActionCreators from '../Redux/ActionCreators'
import { IoMdAddCircle } from "react-icons/io";
const AddTask=(props)=>{
  const [task,setTask]=useState("")
  const dispatch=useDispatch()
  useEffect(()=>{
    if(props.taskToModify){
      setTask(props.taskToModify.task)
    }
  },[props.taskToModify])
  function Add(){
    if(props.taskToModify){
      dispatch(ActionCreators.edit_task(props.taskToModify.id,task))
      setTask("")
      props.setTaskToModify(null)
    }
    else{
      dispatch(ActionCreators.add_task(task))
      setTask("")
    }
  }
  return(
    <div>
      <input type="text" placeholder="Add your items" value={task} onChange={(e)=>setTask(e.target.value)} />
      <IoMdAddCircle onClick={Add} className="Add" />
    </div>
  )
}
export default AddTask;