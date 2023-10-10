'use client';

import React, { useState } from 'react'
import RegisterForm from '@/components/registerform/RegisterForm';
import register from '@/app/api/register';

const Register = () => {

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-homepage-background bg-cover">
      <RegisterForm sendData={register}/>
    </div>

  )
}

export default Register
