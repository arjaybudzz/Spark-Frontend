'use client';

import React, { useState } from 'react'
import type { User } from '@/models/user'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';

const AdminRegisterForm = () => {
  const router = useRouter();

  const [userRegister, setUserRegister] = useState<User>({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const validity = yup.object().shape({
    firstName: yup.string().required().min(2).max(30),
    middleName: yup.string().optional().min(2).max(30),
    lastName: yup.string().required().min(2).max(30),
    email: yup.string().email().required().min(10).max(30),
    password: yup.string().required().min(8).max(20),
    passwordConfirmation: yup.string().required().min(8).max(20).oneOf([yup.ref("password"), "Passwords do not match!"])
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validity)
  });

  const updateFirstName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserRegister({...userRegister, firstName: event.target.value});
  };

  const updateMiddleName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserRegister({...userRegister, middleName: event.target.value});
  };

  const updateLastName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserRegister({...userRegister, lastName: event.target.value});
  };

  const updateEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserRegister({...userRegister, email: event.target.value});
  };

  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserRegister({...userRegister, password: event.target.value});
  };

  const updatePasswordConfirmation = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserRegister({...userRegister, passwordConfirmation: event.target.value});
  };

  const registerAdmin = async (data: User): Promise<void> => {
    const url = `https://spark-9bqv.onrender.com/api/v1/admins`;

    await axios.post(url, {
        first_name: data.firstName,
        middle_name: data.middleName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
        password_confirmation: data.passwordConfirmation
    }).then((response: AxiosResponse<any, any>) => {
        console.log(response);
        router.push("/admin");
    }).catch((errors) => console.log(errors))
  }

  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <h1 className='text-4xl text-white mb-8'>
        Register now!
      </h1>
      <form
        method="POST"
        className='flex flex-col'
        onSubmit={handleSubmit(registerAdmin)}>
        <div className='flex flex-row w-[1000px] justify-between items-center mb-9'>
          <div className='flex flex-row w-[400px] h-auto justify-between items-center'>
            <label
              htmlFor='first-name-input'
              className='text-xl text-white'>
                First Name:
            </label>
            <input {...register("firstName")}
              id='first-name-input'
              className='w-[250px] h-10 rounded-xl p-6 outline-none'
              onChange={updateFirstName}/>
          </div>

          <div className='flex flex-row w-[400px] h-auto justify-between items-center'>
            <label
              htmlFor='middle-name-input'
              className='text-xl text-white'>
                Middle Name:
            </label>
            <input {...register("middleName")}
              id='middle-name-input'
              className='w-[250px] h-10 rounded-xl p-6 outline-none'
              placeholder='Optional'
              onChange={updateMiddleName}/>
          </div>
        </div>

        <div className='flex flex-row w-[1000px] justify-between items-center mb-9'>
          <div className='flex flex-row w-[400px] h-auto justify-between items-center'>
            <label
              htmlFor='last-name-input'
              className='text-xl text-white'>
                Last Name:
            </label>
            <input {...register("lastName")}
              id='last-name-input'
              className='w-[250px] h-10 rounded-xl p-6 outline-none'
              onChange={updateLastName}/>
          </div>

          <div className='flex flex-row w-[400px] h-auto justify-between items-center'>
            <label
              htmlFor='email-input'
              className='text-xl text-white'>
                Email:
            </label>
            <input {...register("email")}
              id='email-input'
              className='w-[250px] h-10 rounded-xl p-6 outline-none'
              onChange={updateEmail}/>
          </div>
        </div>

        <div className='flex flex-row w-[1000px] justify-between items-center mb-9'>
          <div className='flex flex-row w-[400px] h-auto justify-between items-center'>
            <label
              htmlFor='password-input'
              className='text-xl text-white'>
                Password:
            </label>
            <input {...register("password")}
              type='password'
              id='password-input'
              className='w-[250px] h-10 rounded-xl p-6 outline-none'
              onChange={updatePassword}/>
          </div>

          <div className='flex flex-row w-[400px] h-auto justify-between items-center'>
            <label
              htmlFor='password-confirmation-input'
              className='text-xl text-white'>
                Confirm Password:
            </label>
            <input {...register("passwordConfirmation")}
              type='password'
              id='password-confirmation-input'
              className='w-[250px] h-10 rounded-xl p-6 outline-none'
              onChange={updatePasswordConfirmation}/>
          </div>
        </div>
        <button
          type='submit'
          className="w-[200px] h-11 bg-blue-500 rounded-xl self-center text-xl hover:bg-blue-400 hover:text-blue-600 duration-200">
          Register
        </button>
      </form>
    </div>
  )
}

export default AdminRegisterForm
