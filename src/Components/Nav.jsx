import React from 'react'
import { SiSwiggy } from "react-icons/si";
import { IoSearchSharp } from "react-icons/io5";

const Nav = () => {
  return (
    <header className="bg-white p-6 flex justify-between items-center">
      <h1 className='flex text-red-600 font-extrabold   '> <SiSwiggy /> <span className=' bold  -mt-1'> SWIGGY</span></h1>
  <div className="flex p-2 rounded bg-slate-100  text-gray-300 " > <input type="text" placeholder="Search for restaurant and food" className=" bg-slate-100 w-56 lg:w-60" /><span className=' mt-1 justify-end'> <IoSearchSharp /></span>
  </div>  
  </header>
  )
}

export default Nav