'use client'

import React from 'react'
import register from '@/app/api/register';
import RegisterForm from '@/components/registerform/RegisterForm';
import type { User } from '@/models/user';
import AdminRegisterForm from '@/components/admin-registerform/AdminRegisterForm';

const AdminRegister = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-homepage-background bg-cover p-10">
      <h1 className='text-white text-2xl'>Admin Registration Form</h1>
        <AdminRegisterForm />
    </div>

  )
}

export default AdminRegister
