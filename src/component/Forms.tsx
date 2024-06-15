import { categories } from "../DB/date";
import { Dispatch, useState, ChangeEvent, FormEvent } from "react";
import { Activity } from "../type";
import { ActivityActions } from "../reducers/activityReducer";

type FormsProps = {
  dispatch: Dispatch<ActivityActions>;
};
//Valores uniciales del estado activity
const initialSate = {
  category: 1,
  name: " ",
  calories: 0,
};
export default function Forms({ dispatch }: FormsProps) {
  //Definiendo estey para el manejo de la informacion
  const [activity, setActivity] = useState<Activity>(initialSate);
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    //vañlidando si es numero o string
    const isNumber = ["category", "aclories"].includes(e.target.id);

    setActivity({
      ...activity,
      [e.target.id]: isNumber ? +e.target.value : e.target.value,
    });
  };
  //Verifica si una actividad es valida o no
  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Utilizando useReducer para almacenar el state
    dispatch({ type: "save-actuvity", paylod: { newActivity: activity } });
    setActivity(initialSate);
  };
  return (
    <form
      className=" bg-white shadow space-y-5 p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="category" className=" font-bold">
          Categoría:
        </label>
        <select
          className=" border border-slate-300 p-3 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.name}
            </option>
          ))}
        </select>
      </div>
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="name" className=" font-bold">
          Actividad:
        </label>
        <input
          className=" border-slate-300 border rounded-lg p-2"
          id="name"
          type="text"
          placeholder="Ej: Comida, Jugo de naranja, Ejercicio, Pesas,Bicicleta"
          value={activity.name}
          onChange={handleChange}
        />
      </div>
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="calories" className=" font-bold">
          Calorías:
        </label>
        <input
          className=" border-slate-300 border rounded-lg p-2"
          id="calories"
          type="number"
          placeholder="Ej: Calorías 200 o 300"
          min={0}
          value={activity.calories}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className=" bg-slate-800  hover:bg-slate-900 text-white
       uppercase cursor-pointer p-2 font-bold w-full rounded-lg disabled:opacity-10"
        value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
        disabled={!isValidActivity()}
      />
    </form>
  );
}
