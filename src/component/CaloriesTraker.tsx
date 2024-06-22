import { useMemo } from "react";
import type { Activity } from "../type";
import CaloriesDisplay from "./CaloriesDisplay";

type CaloriesTrakerProps = {
  activities: Activity[];
};
export default function CaloriesTraker({ activities }: CaloriesTrakerProps) {
  //Contadores de calorias
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activities) =>
          activities.category === 1 ? total + +activities.calories : total,
        0
      ),
    [activities]
  );
  //Contador de calorias quemadas
  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activities) =>
          activities.category === 2 ? total + +activities.calories : total,
        0
      ),
    [activities]
  );
  // Calorias Totales
  const netCalories = useMemo(()=> caloriesConsumed - caloriesBurned,[activities])
  return (
    <>
      <h2 className=" text-4xl font-blaack text-white text-center">
        Resumen de calorias
      </h2>
      <div className=" flex flex-col md:justify-between items-center md:flex-row gap-5 mt-10">
        <CaloriesDisplay calories={caloriesConsumed} text={"Consumidas"} />
        <CaloriesDisplay calories={caloriesBurned} text={"Quemadas"} />
        <CaloriesDisplay calories={netCalories} text={"Diferencia"} />
      </div>
    </>
  );
}
