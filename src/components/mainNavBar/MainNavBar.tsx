'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const MainNavBar = () => {
    const router = useRouter();

  return (
    <nav className='flex flex-row fixed top-0 h-16 left-0 right-0 bg-blue-500 justify-between items-center p-6'>
    <p className='text-blue-100 text-xl'>Spark</p>
    <div className='flex flex-row w-auto h-auto gap-2 items-center'>
        <button
            className='bg-blue-400 px-6 h-10'
            onClick={() => router.push("/login")}>
            <span className='text-blue-800'>Login</span>
        </button>

        <button
            className='bg-blue-800 px-6 h-10'
            onClick={() => router.push("/register")}>
            <span className='text-blue-400'>Sign up</span>
        </button>
    </div>
    </nav>
  )
}

export default MainNavBar
