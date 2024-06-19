import { Activity } from "../type";

export type ActivityActions =
  | { type: "save-actuvity"; paylod: { newActivity: Activity } }
  | { type: "set-activeId"; paylod: { id: Activity["id"] } };

export type ActivityState = {
  activity: Activity[];
  activeId: Activity["id"];
};
//Estado inicial del reducer
export const initialState: ActivityState = {
  activity: [],
  activeId: "",
};

//userReducer
export const activityReducer = (
  state: ActivityState = initialState,
  actions: ActivityActions
) => {
  if (actions.type === "save-actuvity") {
    //Codigo que maneja la logica para actualizar el state

    return {
      //escribiendo en el state
      ...state,
      activity: [...state.activity, actions.paylod.newActivity],
    };
  }
  if (actions.type === "set-activeId") {
    return {
      ...state,
      activeId: actions.paylod.id,
    };
  }
  return state;
};
