import { Activity } from "../type";

export type ActivityActions = {
    type:'save-actuvity',paylod:{newActivity:Activity}
};

type ActivityState = {
  activity: Activity[];
};
//Estado inicial del reducer
export const initialState: ActivityState = {
  activity: [],
};

//userReducer
export const activityReducer = (
  state: ActivityState = initialState,
  actions: ActivityActions
) => {
    if(actions.type ==='save-actuvity'){
        //Codigo que maneja la logica para actualizar el state
        
        return{
          //escribiendo en el state
          ...state,
          activity:[...state.activity,actions.paylod.newActivity]
        }
    }
    return state;
};
