import React from 'react'
import Card from './Card/page'
const Home = () => {
  return (
    <>
   
    <div className="flex justify-around ">
      <Card name="Faraz" gender="Male" course="Agentic AI"/>
      <Card name="Fatima" gender="Female" course="Agentic AI"/>
      <Card name="Ayesha" gender="Female" course="Agentic AI"/>
    </div>
    

    </>
  )
}

export default Home
