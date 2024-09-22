import {useState, useEffect} from 'react';
import React from 'react'
import StockParts from '../components/StockParts';
import AddStockModal from '../components/AddStockModal';


const StockPieseAuto = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  //Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // adjust number of items per page
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    const fetchParts = async () => {
      const apiUrl = '/api/parts'
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setParts(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }

    }
    fetchParts();
  }, []);


  //Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = parts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(parts.length / itemsPerPage);

  const handleNextPage = () => {
    if(currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage +1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  if(loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
<div>

  <button className=' rounded-full ml-2 py-1 px-3 my-4 uppercase text-xs font-bold cursor-pointer border border-black tracking-wider bg-blue-300 hover:scale-95' onClick={() => setOpen(true)}>Add Stock</button>
</div>
      <div className='flex justify-center items-center   border-black py-8'>
        <table className='shadow-2xl border-2 w-4/5'>
            <thead className='table-header-group'>
                <tr className='table-row'>
                    <th className='py-3 border border-black'>ID</th>
                    <th className='py-3 border border-black'>Title</th>
                    <th className='py-3 border border-black'>Producer</th>
                    <th className='py-3 border border-black'>Code</th>
                    <th className='py-3 border border-black'>Price</th>
                    <th className='py-3 text-center border border-black'>Stock</th>
                    <th className='py-3 text-center border border-black'>Action</th>  
                </tr>
            </thead>
        {currentItems.map((part, id) => (
          <StockParts key={id} part={part}/>
        ))}
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 space-x-4 my-4">
  <button
    onClick={handlePreviousPage}
    disabled={currentPage === 1}
    className={`px-4 py-2 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition ${
      currentPage === 1 && 'opacity-50 cursor-not-allowed'
    }`}
  >
    Previous
  </button>
  <span className="text-blue-700 font-semibold text-lg">
    {currentPage} of {totalPages}
  </span>
  <button
    onClick={handleNextPage}
    disabled={currentPage === totalPages}
    className={`px-4 py-2 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition ${
      currentPage === totalPages && 'opacity-50 cursor-not-allowed'
    }`}
  >
    Next
  </button>
</div>

      <AddStockModal open={open} onClose={() => setOpen(false)}>
        <div>
          
        </div>
      </AddStockModal>
    </>

  )
}

export default StockPieseAuto