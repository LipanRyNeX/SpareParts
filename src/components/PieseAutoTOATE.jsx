import { useState, useEffect} from 'react'
import PartSinglePage from './PartSinglePage'
import React from 'react'
import Spinner from './Spinner'


const PieseAutoTOATE = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [partsPerPage, setPartsPerPage] = useState(9);


  useEffect(() => {
    const fetchParts = async () => {
      const apiUrl = '/api/parts'
      try {
        const res = await fetch(apiUrl)
        const data = await res.json();
        setParts(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }

    }
    fetchParts();
  }, [])

  //Get Current Posts
  const indexOfLastPart = currentPage * partsPerPage;
  const indexOfFirstPart = indexOfLastPart - partsPerPage;
  const currentParts = parts.slice(indexOfFirstPart, indexOfLastPart);

  return (
    <div>   
        {loading ? (<Spinner />) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-36'>
          {parts.map((currentParts, id) => (
            <PartSinglePage  key={id} part={currentParts} />
            
          ))}
          </div>
        )}
    </div>
  )
}

export default PieseAutoTOATE

