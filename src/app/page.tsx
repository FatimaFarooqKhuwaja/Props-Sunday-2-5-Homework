import React from 'react'
import Card from './Card/page'
const Home = () => {
  return (
    <>
   
    <div className="place-items-center md:grid md:grid-cols-3 grid grid-col-1 sm:grid sm:grid-cols-2 gap-[20px]">
      <Card name="Faraz" gender="Male" course="Agentic AI"/>
      <Card name="Fatima" gender="Female" course="Agentic AI"/>
      <Card name="Ayesha" gender="Female" course="Agentic AI"/>
    </div>
    

    </>
  )
}

export default Home
