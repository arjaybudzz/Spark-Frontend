import React from 'react'
import Link from 'next/link'
import AdminLoginForm from '@/components/adminloginform/AdminLoginForm'

const Admin = () => {

  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center bg-homepage-background bg-cover p-16'>
      <h1 className='text-white text-4xl font-bold'>ADMIN LOGIN</h1>
        <AdminLoginForm />
        <p className='text-xl text-white'>Create an Admin Account <Link href="/admin/register" className='text-blue-500'>here</Link></p>
    </div>
  )
}

export default Admin
