import React from 'react'
import { Link } from 'react-router-dom'

const partSinglePage = ({part}) => {
  return (
            <div  className='bg-gray-100 rounded mx-24 mt-8 overflow-hidden shadow-lg size-96 border'>
                <img src={part.image} alt="" className='h-60 w-full object-cover object-center' />
                    <div className='mx-2 mt-2 relative font-semibold'>
                        <span>{part.title}</span>
                        <br />
                        <span>{part.producer}</span>
                        <br />
                        <span>Pret:{part.price} Lei</span>
                        <br />
                        <Link to={`/parts/${part.id}`} className='absolute bottom right-1 mt-4 rounded-full py-1 px-3 uppercase text-xs font-bold cursor-pointer border border-black tracking-wider bg-blue-300 hover:scale-95'>Detalii</Link>
                    </div>
            </div>
  )
}

export default partSinglePage