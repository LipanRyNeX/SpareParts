import { Outlet } from 'react-router-dom'
import React from 'react'
import  NavBar  from '../components/NavBar'
import MenuBar from '../components/MenuBar'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
  return (
    <>
      <NavBar /> 
      <MenuBar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default MainLayout