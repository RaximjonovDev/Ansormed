import React from 'react'
import logo from '../img/logo-icon.png'

const Footer = () => {
  return (
    <footer className="footer bg-black p-6">
        <div className="container max-w-1140 flex justify-between items-center px-5 mx-auto">
            <div className="left">
                <a href="index.html" className="font-semibold flex items-center"><img src={logo} alt="AnsorMed" className="mr-4"/><h1 className="text-2xl text-white">AnsorMed</h1></a>
            </div>
            <div className="right-0">
                <a href="#" className="link mr-8 text-white">Xizmatlar</a>
                <a href="#" className="link mr-8 text-white">Dorilar</a>
                <a href="#" className="link mr-8 text-white">Asal</a>
                <a href="#" className="link mr-8 text-white">Kontaktlar</a>
                <a href="#" className="link text-white">Blog</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer