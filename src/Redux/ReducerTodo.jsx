import * as ActionType from './ActionTypes'
const initial_state = { 
  lastid:5, 
  tasks : [ 
      { 
          id:1, 
          task: "Réaliser le TP React", 
          completed: true 
      }, 
      { 
          id:2, 
          task: "Préparer la présentation finale du React", 
          completed: false 
      }, 
      { 
          id:3, 
          task: "Réaliser Figma Projet de synthèse", 
          completed: false 
      }, 
      { 
          id:4, 
          task: "Préparer le CC1 React", 
          completed: true 
      }, 
      { 
          id:5, 
          task: "Réaliser de la conception du Projet de synthèse", 
          completed: false 
      } 
  ] 
}
const ReducerTodo=(state=initial_state, action)=>{
  let newState={...state};
  switch(action.type){
    case ActionType.TOOGLE_COMPLETE:
      newState={
        lastid:state.lastid,
        tasks:state.tasks.map((task)=>(
          task.id===action.payload?{...task,completed:!task.completed}:task
        ))
      }
      break
    case ActionType.DELETE_TASK:
      newState={
        ...state,
        tasks:state.tasks.filter((task)=>(
          task.id!==action.payload
        ))
      }
      break
    case ActionType.ADD_TASK:
      newState={
        lastid:state.lastid+1,
        tasks:[...state.tasks,
          {
            id:state.lastid+1,
            task:action.payload,
            completed:false
          }
        ]
      }
      break
    case ActionType.DELETE_ALL_TASKS:
      newState={
        lastid:0,
        tasks:[]
      }
      break
    case ActionType.DELETE_COMPLETED_TASKS:
      newState={
        ...state,
        tasks:state.tasks.filter((task)=>(!task.completed))
      }
      break
    case ActionType.DELETE_UNCOMPLETED_TASKS:
      newState={
        ...state,
        tasks:state.tasks.filter((task)=>task.completed)
      }
      break
    case ActionType.MARK_ALL_TASKS_AS_COMPLETE:
      newState={
        ...state,
        tasks:state.tasks.map((task)=>({
          ...task,
          completed:true
        }))
      }
      break
    case ActionType.EDIT_TASK:
      newState={
        ...state,
        tasks:state.tasks.map((task)=>(task.id===action.payload.id?{...task,task:action.payload.newTask}:task))
      }
      break
  }
  return newState
}
export default ReducerTodo;