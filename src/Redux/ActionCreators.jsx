import * as Action from './ActionTypes'
export const add_task=(task)=>{
    return{
        type:Action.ADD_TASK,
        payload:task,
    }
}
export const toggle_complete=(id)=>{
    return{
        type:Action.TOOGLE_COMPLETE,
        payload:id,
    }
}
export const delete_task=(id)=>{
    return{
        type:Action.DELETE_TASK,
        payload:id,
    }
}
export const delete_all_tasks=()=>{
    return{
        type:Action.DELETE_ALL_TASKS
    }
}
export const delete_completed_tasks=()=>{
    return{
        type:Action.DELETE_COMPLETED_TASKS
    }
}
export const delete_uncompleted_tasks=()=>{
    return{
        type:Action.DELETE_UNCOMPLETED_TASKS
    }
}
export const mark_all_tasks_as_complete=()=>{
    return{
        type:Action.MARK_ALL_TASKS_AS_COMPLETE
    }
}
export const edit_task=(id,newTask)=>{
    return{
        type:Action.EDIT_TASK,
        payload:{id,newTask}
    }
}