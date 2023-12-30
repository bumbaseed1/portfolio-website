'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"

const navLinks = [
    {
    title: "About",
    path:"#about"},
    {
    title: "Projects",
    path:"#projects"},
    {
    title:"Contact",
    path:"#contact"
    }
]

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto'>
            <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>LOGO</Link>
            <div className='mobile-menu block md:hidden'>
                {
                    showMenu ? 
                    <XMarkIcon className='w-6 h-6 text-white cursor-pointer' onClick={() => setShowMenu(!showMenu)} /> :
                    <Bars3Icon className='w-6 h-6 text-white cursor-pointer' onClick={() => setShowMenu(!showMenu)} />
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar