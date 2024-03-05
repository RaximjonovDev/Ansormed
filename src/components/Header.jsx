import React from 'react'
import logo from '../img/logo-icon.png'
import Button from './Button'

const Header = () => {
  return (
    <header className="header p-6">
        <div className="w-full max-w-1140 flex justify-between items-center px-5 mx-auto">
            <div className="left">
                <a href="index.html" className="font-semibold flex items-center"><img src={logo} alt="AnsorMed" className="mr-4"/><h1 className="text-2xl">AnsorMed</h1></a>
            </div>
            <div className="center">
                <a href="#" className="link mr-8">Xizmatlar</a>
                <a href="#" className="link mr-8">Dorilar</a>
                <a href="#" className="link mr-8">Asal</a>
                <a href="#" className="link mr-8">Kontaktlar</a>
                <a href="#" className="link">Blog</a>
            </div>
            <div className="right">
                <Button/>
            </div>
        </div>
    </header>
  )
}

export default Header