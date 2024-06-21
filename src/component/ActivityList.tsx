import { Activity } from "../type";
import { categories } from "../DB/Categorias";
import { useMemo, Dispatch } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ActivityActions } from "../reducers/activityReducer";
import { XCircleIcon } from "@heroicons/react/24/outline";
type ActivityListProps = {
  activity: Activity[];
  dispatch: Dispatch<ActivityActions>;
};
export default function ActivityList({
  activity,
  dispatch,
}: ActivityListProps) {
  const categoryName = useMemo(
    () => (category: Activity["category"]) =>
      categories.map((cat) => (cat.id === category ? cat.name : " ")),
    [activity]
  );
  const isEmptyActivities = useMemo(() => activity.length === 0, [activity]);

  return (
    <>
      <h2 className=" text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>
      {isEmptyActivities ? (
        <p className=" text-center my-5">
          No se ha registrado ninguna actividad.
        </p>
      ) : (
        activity.map((activiti) => (
          <div
            key={activiti.id}
            className=" px-5 py-18 bg-white mt-5 flex justify-between"
          >
            <div className=" space-y-2 relative">
              <p
                className={` absolute -top-4 -left-8 px-10 py-2 text-white uppercase font-bold 
                ${activiti.category === 1 ? "bg-lime-500" : " bg-orange-500"}`}
              >
                {categoryName(+activiti.category)}
              </p>

              <p className="text-4xl font-bold pt-5">{activiti.name}</p>
              <p className=" font-black text-4xl text-lime-500">
                {activiti.calories} {""}
                <span>Calorías</span>
              </p>
            </div>
            <div className=" flex gap-5 items-center">
              <button>
                <PencilSquareIcon
                  className=" h-8 w-8 text-gray-800"
                  onClick={() =>
                    dispatch({
                      type: "set-activeId",
                      payload: { id: activiti.id },
                    })
                  }
                />
              </button>
              <button>
                <XCircleIcon
                  className=" h-8 w-8 text-red-500"
                  onClick={() =>
                    dispatch({
                      type: "delete-activity",
                      payload: { id: activiti.id },
                    })
                  }
                />
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
}
