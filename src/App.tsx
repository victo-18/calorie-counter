import { useReducer, useEffect, useMemo } from "react";
import Forms from "./component/Forms";
import { activityReducer, initialState } from "./reducers/activityReducer";
import ActivityList from "./component/ActivityList";
import CaloriesTraker from "./component/CaloriesTraker";
function App() {
  //Creando el state de reducer
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activity));
  }, [state.activity]);
 
  const canRestarteApp = useMemo(()=> state.activity.length>0 ,[state.activity])


  return (
    <>
      <header className=" bg-lime-600 py-5">
        <div className=" max-w-4xl mx-auto flex justify-between">
          <h1 className=" text-center text-lg uppercase font-bold text-white">
            Contador de Calorías
          </h1>
          <button 
          disabled={!canRestarteApp}
          //onClick={()=>dispatch({type:'restarte-app'})}
          onClick={() => dispatch({type:'restarte-app'})}

          className=" bg-slate-400 hover:bg-slate-800 
          font-bold text-center uppercase rounded text-sm px-5 py-2 text-white
           cursor-pointer disabled:opacity-10" 
           >
            Reiniciar app
          </button>
        </div>
      </header>
      <section className=" bg-lime-500 py-10 px-5">
        <div className=" max-w-4xl mx-auto">
          <Forms dispatch={dispatch} state={state} />
        </div>
      </section>
      <section className=" bg-gray-800 py-10">
          <div className=" max-w-4xl mx-auto">
          <CaloriesTraker
          activities={state.activity}
          />
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
