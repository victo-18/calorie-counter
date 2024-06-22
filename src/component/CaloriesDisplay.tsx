
type CaloriesDisplayProps ={
    calories: number,
    text:string
}

function CaloriesDisplay({calories,text}:CaloriesDisplayProps) {
  return (
    <p className=" text-white font-bold grid grid-cols-1 gap-3 rounded text-center">
    <span className=" font-black text-6xl text-orange">{calories}</span>
    {text}
  </p>
  )
}

export default CaloriesDisplay