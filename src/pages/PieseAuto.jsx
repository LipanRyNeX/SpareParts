import React from 'react'
import PieseAutoTOATE from '../components/PieseAutoTOATE';
import { Link } from 'react-router-dom';

const PieseAuto = () => {

  return (
    <>  
      <div className='uppercase font-bold my-4 text-lg mx-12'>
        <h1 className=''>Lista de piese</h1>
        
        <Link to="/add-part" className='absolute end-10 rounded-full py-1 px-3 uppercase text-xs  cursor-pointer border border-black tracking-wider bg-blue-300 hover:scale-95'>Adaugare Piesa</Link>
      </div>
      <PieseAutoTOATE />
    </>

  )
}

export default PieseAuto

