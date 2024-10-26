import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='py-5 bg-[#6EC207] '>
        <div className="menu_row container flex justify-between items-center">
            <div className="logo"><h1 className='text-5xl font-bold text-orange-100'>Tanjim</h1></div>
            <div className="menu">
                <ul className='flex gap-8'>
                    <li><a className='text-2xl font-semibold text-white hover:text-[#D91656] hover:font-bold' href="/">Home</a></li>
                    <li><a className='text-2xl font-semibold text-white hover:text-[#D91656] hover:font-bold' href="/blog">Blog</a></li>
                    <li><a className='text-2xl font-semibold text-white hover:text-[#D91656] hover:font-bold' href="/about">About</a></li>
                    <li><a className='text-2xl font-semibold text-white hover:text-[#D91656] hover:font-bold' href="/help">Help</a></li>
                </ul>
            </div>
        </div>

    </nav>
      
    </>
  )
}

export default Navbar
