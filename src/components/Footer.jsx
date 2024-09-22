import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='flex justify-between px-20 pb-40 pt-4  bg-gradient-to-r from-blue-800 to-stone-800 text-gray-300 '>
            <div>
            <h3>CONTACT</h3>
            <address>
                Constanta, Bulevardul Tomis 
                <br />
                Nr.97
            </address>
            <p>Numar de telefon:
                <a href="#" className='ml-2'>0746023011</a>
            </p>
            <p >
                Email:
                <a href="#" className='ml-8'>vanzari@yahoo.com</a>
            </p>
            
            </div>
            <div>
            <h3>PROGRAM DE LUCRU</h3>
            <p>Luni - Vineri: 08/09:00 - 18:00 </p>
            <p>(comenzi online non-stop)</p>
            <p>Sambata si duminica: inchis</p>
            </div>
            <div>
            <div>
                SOCIAL MEDIA
            </div>
            <a href="https://facebook.com"><FaFacebook className='inline mr-2 ml-0 '/></a>
            <a href="https://instagram.com"><FaInstagram className='inline mx-2 ' /> </a> 
            <a href="https://twitter.com"><FaTwitter className='inline mx-2 ' /></a> 
            <a href="https://youtube.com"><FaYoutube className='inline mx-2 ' />  </a>
                    
                    
                     
            </div>
    </div>
  )
}

export default Footer