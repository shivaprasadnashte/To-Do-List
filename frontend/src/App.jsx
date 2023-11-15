import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Todocard from "./components/Todocard"
import Addtask from "./components/Addtask"
import Model from "./Model"
function App() {
  const [model, setModel] = useState(false);
  const openModel = () => {
    setModel(true);
  }
  return (
    <>
      <Navbar model={model} setModel={setModel}/>
      <div className=" gap-2 sm:m-2 m-1  grid lg:grid-cols-3 ">
        <Todocard />
      </div>
      <div className={model ? "flex" : "hidden"}>
        <Model model={model} setModel={setModel} />
      </div>
      {/* <Addtask /> */}
    </>
  )
}

export default App
