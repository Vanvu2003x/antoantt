import React, { useState } from "react"
import { Alert } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link, NavLink } from "react-router-dom";
import Ceasar from "./ceasar";
function Crypt({element}) {
  return (
    <>
   
    <div className="flex w-full gap-5">
      <nav className="bg-white border-2">
        <ul className="flex flex-col bg-slate-200 h-full">
          <li className="border-b-2 border-gray-300"><NavLink to="/ceasar" className={({isActive})=>
            isActive ? 'bg-gray-400 text-white w-full block p-3' :'w-full p-3 block hover:bg-gray-300 hover:text-slate-400'
          }>Mã hóa Ceasar</NavLink></li>
          <li className=" border-b-2 border-gray-300"><NavLink to='/donbang' className={({isActive})=>
            isActive ? 'bg-gray-400 text-white w-full block p-3' :'w-full p-3 block hover:bg-gray-300 hover:text-slate-400'
          }>Mã hóa đơn bảng</NavLink></li>
         <li className=" border-b-2 border-gray-300"><NavLink to='/playfair' className={({isActive})=>
            isActive ? 'bg-gray-400 text-white w-full block p-3' :'w-full p-3 block hover:bg-gray-300 hover:text-slate-400'
          }>Mã hóa PlayFair</NavLink></li>
        </ul>
      </nav>
      {element}
      
    </div>
    </>
  );
}

export default Crypt;
