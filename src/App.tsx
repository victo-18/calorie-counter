import { useReducer,useEffect } from "react";
import Forms from "./component/Forms";
import { activityReducer, initialState } from "./reducers/activityReducer";
import ActivityList from "./component/ActivityList";

function App() {
  //Creando el state de reducer
  const [state, dispatch] = useReducer(activityReducer, initialState);
 useEffect(()=>{
localStorage.setItem('activities',JSON.stringify(state.activity))
 },[state.activity])
  return (
    <>
      <header className=" bg-lime-600 py-5">
        <div className=" max-w-4xl mx-auto flex justify-between">
          <h1 className=" text-center text-lg uppercase font-bold text-white">
            Contador de Calorías
          </h1>
        </div>
      </header>
      <section className=" bg-lime-500 py-10 px-5">
        <div className=" max-w-4xl mx-auto">
          <Forms dispatch={dispatch} state={state} />
        </div>
      </section>
      {/* Nueva seccion elementos ingresados */}
      <section className=" p-10 mx-auto max-w-3xl">
        <ActivityList activity={state.activity} dispatch={dispatch} />
      </section>
    </>
  );
}

export default App;
