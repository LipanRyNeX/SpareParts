import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { VscAccount } from "react-icons/vsc";
import { BiSolidCarMechanic } from "react-icons/bi";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
        <div className='flex justify-between mx-12 my-2 '>
        <div className='grid grid-cols-2'>
            <h1 className='grid grid-cols-6'>
            <BiSolidCarMechanic className='size-8 mr-0  shadow-lg' />
                <Link to="" className=' '>Piese De Schimb</Link>
            </h1>
            <form action='' name='search-bar-cod' >
                <input type="text" placeholder='Cauta dupa cod sau denumire produs' className='w-96 border rounded border-black-500 py-2 px-3 mb-2 shadow-md' />
            </form>
        </div>
        <div className='flex justify-between '>
            <VscAccount />
            <h1 className=' ml-2 mr-8 '> 
                Contul Meu
            </h1>
            <FaShoppingCart className='mr-0 '/>
            <h1 className=' mx-2'>
                Coșul Meu
            </h1>
        </div>    
    </div>
</>
  )
}

export default NavBar