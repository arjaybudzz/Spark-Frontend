'use client'

import React from 'react'
import register from '@/app/api/register';
import RegisterForm from '@/components/registerform/RegisterForm';
import type { User } from '@/models/user';

const AdminRegister = () => {

    const registerAdmin = (data: User) => {
        register(data, "admins");
    }

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-homepage-background bg-cover">
        <RegisterForm sendData={registerAdmin}/>
    </div>

  )
}

export default AdminRegister
