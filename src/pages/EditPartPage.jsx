import React from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import {toast } from 'react-toastify'

const EditPartPage = ({updatePartSubmit}) => {
    const part = useLoaderData();
    const [title, setTitle] = useState(part.title);
    const [type, setType] = useState(part.type);
    const [producer, setProducer] = useState(part.producer);
    const [code, setCode] = useState(part.code);
    const [price, setPrice] = useState(part.price);
    const [image, setImage] = useState(part.image);

    const navigate = useNavigate();
    const { id } = useParams();
  
    const uploadImage = async (e) => {
    
        const file= e.target.files[0]
        const base64=await convertBase64(file)
        setImage(base64);
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) =>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload=()=>{
                resolve(fileReader.result);
            }
            fileReader.onerror=(error) =>{
                reject(error);
            }
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        
        const updatedPart = {
            id,
            type,
            title,
            producer,
            code,
            price,
            image
        }

        updatePartSubmit(updatedPart);

        toast.success('Piesa a fost Editata!')

        return navigate(`/parts/${id}`)
    }

  return (
    <section>
        <div > 
            <div>
            <h2 className='font-bold mx-2 my-4 flex justify-center shadow-lg '>Editare Piesa</h2>
                <form onSubmit={submitForm} className='flex justify-center mx-64 mb-4 size-auto font-bold text-gray-300  shadow-lg'> 
                    <div className=' border border-black rounded  bg-gradient-to-r from-blue-800 to-stone-800 '>
                        <div className='px-6 py-2'>
                            <div >
                                <label htmlFor="type">Tipul Piesei:</label>
                            </div>
                            <select name="type" id="type" className='border border-black text-black ' required value={type} onChange={(e) => setType(e.target.value) }>
                                <option value='Consumabil'>Consumabil</option>
                                <option value='NON-consumabil'>NON-consumabil</option>
                                
                            </select>
                            <div className='flex flex-col'>
                                <label htmlFor='title' >Denumire Piesa:</label>
                                <input type="text" name='title' placeholder='Inserati Denumirea piesei aici' className='border border-black my-4 rounded text-black' required value={title} onChange={(e) => setTitle(e.target.value) }/>
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor='producer'>Producator:</label>
                                <input type="text" name='producer' placeholder='Inserati Producatorul piesei aici' className='border border-black my-4 rounded text-black' required value={producer} onChange={(e) => setProducer(e.target.value) }/>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='code' >Cod:</label>
                                <input type="number" name='code' placeholder='Inserati Codul piesei aici' className='border border-black my-4 rounded text-black' required value={code} onChange={(e) => setCode(e.target.value) } />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='price' >Pret:</label>
                                <input type="number" name='price' placeholder='Inserati Pretul piesei aici' className='border border-black my-4 rounded text-black' required  value={price} onChange={(e) => setPrice(e.target.value) }/>
                            </div>
                            <div className='flex flex-col  '>
                                <label htmlFor='image'>Selecteaza Imaginea:</label>
                                <input type='file' name='image' alt='Submit' className='`border border-black py-8 ' value={undefined} onChange={(e) => {uploadImage(e)}} />
                            </div>
                            <div className='flex justify-center'>
                                <button className='rounded-full mx-2 py-1 px-24 uppercase text-xs  cursor-pointer border border-black tracking-wider bg-blue-300 text-black'>Editeaza Piesa</button>
                            </div>
                        </div>
                        
                    </div>
                    
                    

                </form>
            </div>
        </div>
    </section>
  )
}

export default EditPartPage