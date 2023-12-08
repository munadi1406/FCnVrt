'use client'

import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [isScroll, setIsScroll] = useState()


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })





    return (
        <nav className={`w-full bg-white ease-in-out duration-150  ${isScroll ? 'shadow-sm' : 'shadow-none'} p-2 sticky top-0`}>
            <h1 className='text-indigo-400 text-3xl font-semibold'>FCnVrt</h1>
        </nav>
    )
}
