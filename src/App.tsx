import Forms from "./component/Forms"

function App() {


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
        <Forms/>
    </div>

  </section>
    </>
  )
}

export default App
