import React from 'react';
import { SiSwiggy } from "react-icons/si";
const Footer = () => (
  <footer className="bg-black p-4 h-full text-white text-start  ">
    <div className='mx-8'>
   <h1 className='flex '> <SiSwiggy /> <span className='text- bold  -mt-1'> Swiggy</span></h1>
   <p className='text-gray-400'> © 2023 Bundl Technologies Pvt. Ltd</p>
   </div>
  </footer>
);

export default Footer;
