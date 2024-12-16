import React from 'react'
import Cards from "./Card/page"
const Home = () => {
  return (
    <>
   
    <div className="place-items-center md:grid md:grid-cols-3 grid grid-col-1 sm:grid sm:grid-cols-2 gap-[20px]">
      <Cards name="Faraz" gender="Male" course="Agentic AI"/>
      <Cards name="Fatima" gender="Female" course="Agentic AI"/>
      <Cards name="Ayesha" gender="Female" course="Agentic AI"/>
    </div>
    

    </>
  )
}

export default Home
