// import { useState, useEffect } from 'react'
import React from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const SinglePagePart = ({deletePart}) => {
  const navigate = useNavigate();
    const {id} = useParams();
    const part = useLoaderData();

    const onDeleteClick = (partId) => {
      const confirm = window.confirm('Are you sure you want to delete this listing?')

      if (!confirm) return;

      deletePart(partId);

      toast.success('Piesa a fost stearsa!')
      navigate('/pieseauto')
    }

  return (
    <>
      <div>
        <div className='mx-20 mt-12 text-3xl subpixel-antialiased font-bold'>{part.title}</div> 
      </div>
      <div className='grid grid-cols-3 md:grid-cols-3  gap-6 mx-20 my-12'>
          <div>
            <img src={part.image} alt="" className='   shadow-lg' />
          </div>
          <div>
            <p className='font-bold text-xl'>Producator: {part.producer}</p>
          </div>
          <div>
            <p className='text-2xl font-semibold text-red-600 my-8'>Pret:{part.price} Lei</p>
            <p>Transport gratuit la peste 500 de lei</p>
            <button className= 'rounded-full py-1 px-3 uppercase text-xs font-bold cursor-pointer border border-black tracking-wider bg-blue-300 my-12 hover:scale-95'>Adauga in cos</button>
          </div>
      </div>
      <div  className='static my-12 mx-12'>
        <div className=' font-semibold py-2 px-2 mx-12 border border-2 border-black rounded size w-64'>Cod producator: {part.code}</div>
          <div className='absolute end-10 '>
            <button onClick={ () => onDeleteClick(part.id)} className=' rounded-full  py-1 px-3 uppercase text-xs font-bold cursor-pointer border border-black tracking-wider bg-red-500 hover:scale-95'>Sterge Piesa</button>
            <Link to={`/edit-part/${part.id}`} className='rounded-full ml-2 py-1 px-3 uppercase text-xs font-bold cursor-pointer border border-black tracking-wider bg-blue-300 hover:scale-95'>Editare Piesa </Link>
          </div>
      </div>
    </>
  )
} 

const partLoader = async ({ params }) => {
    const res = await fetch(`/api/parts/${params.id}`);
    const data = await res.json();
    return data;
}

export  {SinglePagePart as default, partLoader};