import { Activity } from "../type";

export type ActivityActions =
  | { type: "save-activity"; payload: { newActivity: Activity } }
  | { type: "set-activeId"; payload: { id: Activity["id"] } }
  | { type: "delete-activity"; payload: { id: Activity["id"] } }
  | { type: "restarte-app" };

export type ActivityState = {
  activity: Activity[];
  activeId: Activity["id"];
};
const localStorageActivities = (): Activity[] => {
  const activities = localStorage.getItem("activities");
  return activities ? JSON.parse(activities) : [];
};
//Estado inicial del reducer
export const initialState: ActivityState = {
  activity: localStorageActivities(),
  activeId: "",
};

//userReducer
export const activityReducer = (
  state: ActivityState = initialState,
  actions: ActivityActions
) => {
  if (actions.type === "save-activity") {
    //Codigo que maneja la logica para actualizar el state
    let updateActivities: Activity[] = [];
    if (state.activeId) {
      updateActivities = state.activity.map((acctivities) =>
        acctivities.id === state.activeId
          ? actions.payload.newActivity
          : acctivities
      );
    } else {
      updateActivities = [...state.activity, actions.payload.newActivity];
    }

    return {
      //escribiendo en el state
      ...state,
      activity: updateActivities,
      activeId: "",
    };
  }
  //seteando el formulario
  if (actions.type === "set-activeId") {
    return {
      ...state,
      activeId: actions.payload.id,
    };
  }
  //Eliminando una actividad
  if (actions.type === "delete-activity") {
    return {
      ...state,
      activity: state.activity.filter((act) => act.id !== actions.payload.id),
    };
  }
  //resetera la app
  if (actions.type === "restarte-app") {
    return {
      activity: [],
      activeId: "",
    };
  }
  return state;
};
