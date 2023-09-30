'use client'

import LoginForm from '@/components/loginform/LoginForm'
import React from 'react'
import { LogInData } from '@/models/loginData'
import { loginUser } from '../api/login'

const Admin = () => {
    const loginAdmin = (data: LogInData) => {
        loginUser(data, "admin");
    }

  return (
    <div className='flex flex-row w-screen h-screen justify-center items-center bg-homepage-background bg-cover'>
        <div className='flex flex-col flex-1 h-screen relative justify-center items-center'>
            <h1 className='text-4xl text-white font-bold'>
                HELLO ADMIN!
            </h1>
            <LoginForm function={loginAdmin}/>
        </div>
    </div>
  )
}

export default Admin
