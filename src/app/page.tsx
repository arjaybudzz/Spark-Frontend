'use client';

import Link from "next/link";
import { TextField } from '@mui/material';
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import type { LogInData } from "@/models/loginData";
import { loginUser } from "./api/login";


export default function Home() {
  const [user, setUser] = useState<LogInData>({
    email: '',
    password: ''
  })

  const validity = yup.object().shape({
    email: yup.string().email().required().min(10).max(30),
    password: yup.string().min(8).max(20).required()
  })

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validity)
  });

  const updateEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, email: event.target.value })
  };

  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({ ...user, password: event.target.value })
  };

  return (
    <main className="flex flex-row w-screen h-screen justify-center items-center bg-homepage-background bg-cover">
      <div className="flex flex-col flex-1 h-screen relative border-r-2 justify-center items-center p-6">
        <h1 className="text-white text-6xl self-start mb-6">
          Welcome to Spark
        </h1>
        <p className="text-2xl text-white">Spark is an open forum web application aimed at students, intructors, engineers and other practitioners in electrical industry.</p>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 h-screen relative p-6">
        <h1 className="text-xl text-white self-center mb-6">Login your profile now!</h1>
        <form
          method="POST"
          className='flex flex-col'
          onSubmit={handleSubmit(loginUser)}>
          <div className="flex flex-row justify-between items-center w-[500px] mb-9">
            <label htmlFor="email-input" className="text-xl text-white">
              Email:
            </label>
            <input
              id="email-input" {...register("email")}
              className="outline-none w-[300px] h-10 p-4 rounded-xl"
              onChange={updateEmail}/>
          </div>
          <div className="flex flex-row justify-between items-center w-[500px] mb-10">
            <label htmlFor="password-input" className="text-xl text-white">
              Password:
            </label>
            <input
              id="password-input" {...register("password")}
              className="outline-none w-[300px] h-10 p-4 rounded-xl"
              type="password"
              onChange={updatePassword}/>
          </div>
          <button type='submit' className="w-[200px] h-11 bg-blue-500 rounded-xl self-center text-xl hover:bg-blue-400 hover:text-blue-600 duration-200">
            Submit
          </button>
        </form>

        <p className="text-xl text-white mt-7">
          Don&apos;t have an account? Sign up <Link href="/register" className="text-blue-500">here.</Link>
        </p>
      </div>
    </main>
  )
}
