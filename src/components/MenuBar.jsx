import { NavLink } from 'react-router-dom'
import React from 'react'

const MenuBar = () => {
    const linkClass = ({ isActive }) => isActive ? "bg-black text-white border rounded py-2 px-2 border-orange-300 shadow-md" : "border rounded py-2 px-2 border-orange-300 "
  return (
    <div >
        <nav className='bg-gradient-to-r from-blue-800 to-stone-800 py-0.5 shadow-md'>
        <div className='mx-40  text-gray-300'>
            <ul className='flex justify-between mx-12 my-8'>
            <li>
                <NavLink to="/" className={linkClass}>
                <span  >Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/pieseauto" className={linkClass}>
                <span >Piese Auto</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/stockpieseauto" className={linkClass}>
                <span>Stock Piese Auto</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/mentenanta" className={linkClass}>
                <span>Mentenanță</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={linkClass}>
                <span>Contact</span>
                </NavLink>
            </li>
            </ul>
        </div>
        </nav>
  </div>
  )
}

export default MenuBar