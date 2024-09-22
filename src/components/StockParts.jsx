import React from 'react'
import { FaPencil } from "react-icons/fa6";
import { BsFillPatchMinusFill } from "react-icons/bs";
import { GoHistory } from "react-icons/go";


const StockParts = ({part}) => {
  return (
<>

        <tbody>
            <tr className='border border-black hover:bg-gray-400 '>
                <td className='text-center border border-black'>{part.id}</td>
                <td className='text-center border border-black'>{part.title}</td>
                <td className='text-center border border-black'>{part.producer}</td>
                <td className='text-center border border-black'>{part.code}</td>
                <td className='text-center border border-black'>{part.price}</td>
                <td className='text-center border border-black'>{part.stock}</td>
                <td className='flex justify-evenly py-2 '><FaPencil/> <GoHistory /> <BsFillPatchMinusFill /></td>
            </tr>
        </tbody>
</>
  )
}

export default StockParts