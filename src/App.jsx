import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import PieseAuto from './pages/PieseAuto';
import SinglePagePart, {partLoader} from './pages/SinglePagePart';
import AddPartPage from './pages/AddPartPage';
import EditPartPage from './pages/EditPartPage';
import StockPieseAuto from './pages/StockPieseAuto';
import Mentenanta from './pages/Mentenanta';




const App = () => {
  //Add New part
  const addPart = async (newPart) => {
      const res = await fetch('/api/parts', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body:JSON.stringify(newPart),
      });
      return;
  }
 
  
  // Delete Part
  const deletePart = async (id) => {
    const res = await fetch(`/api/parts/${id}`, {
      method: 'DELETE',
      });
      return;
  }



  //Update Part

  const updatePart = async (part) => {
    const res = await fetch(`/api/parts/${part.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(part),
      });
      console.log(part)
      return;
  }



  const router = createBrowserRouter (
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/pieseauto' element={<PieseAuto />} />
      <Route path='/stockpieseauto' element={<StockPieseAuto />} />
      <Route path='/mentenanta' element={<Mentenanta />} />
      <Route path='/add-part' element={<AddPartPage addPartSubmit={addPart}/>} />
      <Route path='/parts/:id' element={<SinglePagePart deletePart={deletePart} />} loader={partLoader} />
      <Route path='/edit-part/:id' element={<EditPartPage updatePartSubmit={updatePart} />} loader={partLoader} />
    </Route>
    ));
  
  return <RouterProvider router={router} />
}

export default App

