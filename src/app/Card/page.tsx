import React from 'react'


const Cards = (props:any ) => {
    const {name , gender , course} = props;
  return (
<>
<div className="bg-blue-100 h-[300px] w-[300px] border-[10px] border-blue-950 rounded-md text-[20px] font-[500] md:space-y-[25px] space-y-[15px] p-[20px]">
    <h1>Name = {name}</h1>
    <h1>Gender = {gender}</h1>
    <h1>Course = {course}</h1>
    <button className="py-1 px-7 bg-slate-200 border-[7px] border-blue-950 rounded-lg hover:bg-blue-300">Apply</button>
</div>

</>
  )
}

export default Cards;
