import React, {useEffect} from 'react'

const AddStockModal = ({open, onClose, children }) => {

    useEffect(() => {
        if(open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => { 
            document.body.style.overflow = 'auto' ;
        };

    }, [open]);

  return (
    <div onClick={onClose} className={`fixed inset-0 flex items-center justify-center min-h-full overflow-hidden pb-64  w-screen  text-center  z-50 transition-colors ${open ? "visible bg-black/40" : "invisible"}
    `}>
<div 
onClick= {(e) => e.stopPropagation()}
className={`flex jusitfy-center items-center bg-white rounded-xl shadow p-2 transition-all py-6 px-20
    ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
    `}>
        <button 
        onClick={onClose}
        className='absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>X
        </button>
        <div className='flex flex-col items-center'>
            <h1 className='my-2 py-1 text-center'>Add Stock</h1>
            <input type="text" placeholder='Select Title' className='py-1 px-1 my-1 border border-black rounded' />
            <input type="number" placeholder='Select Quantity' className='py-1  px-1 my-1 border border-black rounded' />
            <input type="date"  className='py-1 px-9 my-1 border border-black rounded'/>
            <div><button className=' rounded-full ml-2 py-1 px-3 my-4 uppercase text-xs font-bold cursor-pointer border border-black tracking-wider bg-blue-300 hover:scale-95'>Save</button>
            <button className=' rounded-full ml-2 py-1 px-3 my-4 uppercase text-xs font-bold cursor-pointer border border-black tracking-wider bg-gray-300 hover:scale-95'
            onClick={onClose}>
                Cancel
            </button></div>
            
        </div>


{children}
</div>

    </div>
  )
}



export default AddStockModal