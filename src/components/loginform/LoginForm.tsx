'use client'

import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import loginUser from '@/app/api/v1/login';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();

  const validity = yup.object().shape({
    email: yup.string().email().required().min(10).max(30),
    password: yup.string().min(8).max(20).required()
  })

  const { register } = useForm({
    resolver: yupResolver(validity)
  });

  const login = async(data: FormData): Promise<void> => {
    await loginUser(data);
    router.push("/dashboard")
  }

  return (
    <div className="flex flex-col justify-center items-center flex-1 h-screen relative p-6">
        <h1 className="text-xl text-white self-center mb-6">Login your profile now!</h1>
        <form
          method="POST"
          className='flex flex-col'
          action={login}>
          <div className="flex flex-row justify-between items-center w-[500px] mb-9">
            <label htmlFor="email-input" className="text-xl text-white">
              Email:
            </label>
            <input
              id="email-input" {...register("email")}
              className="outline-none w-[300px] h-10 p-4 rounded-xl"
              name="email"/>
          </div>
          <div className="flex flex-row justify-between items-center w-[500px] mb-10">
            <label htmlFor="password-input" className="text-xl text-white">
              Password:
            </label>
            <input
              id="password-input" {...register("password")}
              className="outline-none w-[300px] h-10 p-4 rounded-xl"
              type="password"
              name="passwordInput"/>
          </div>
          <button type='submit' className="w-[200px] h-11 bg-blue-500 rounded-xl self-center text-xl hover:bg-blue-400 hover:text-blue-600 duration-200">
            Submit
          </button>
        </form>
      </div>
  )
}

export default LoginForm


