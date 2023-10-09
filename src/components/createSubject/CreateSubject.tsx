'use client';

import React from 'react'
import { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'

const CreateSubject = () => {

    const [subject, setSubject] = useState<string>("");

    const validation = yup.object().shape({
        subject: yup.string().required()
    })

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(validation)
    });

    const updateSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubject(event.target.value);
    }

    const createSubject = async(): Promise<void> => {
        const url = 'https://spark-9bqv.onrender.com/api/v1/subjects';

        await axios.post(url, {
            name: subject
        },{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${localStorage.getItem("coverageToken")}`
            }
        }).then((response: AxiosResponse<any, any>) => {
            console.log(response);
        }).catch((errors) => console.log(errors))
    }

  return (
    <div
        className='flex flex-row w-4/5 h-auto border-none rounded-md hover:shadow-black hover:shadow-md hover:cursor-pointer p-4 mb-4 border-gray-500 justify-between items-center bg-gradient-to-r from-blue-500 to-pink-500'>
        <form
            method='POST'
            onSubmit={handleSubmit(createSubject)}
            className='flex flex-row w-full justify-between items-center'>
            <input
                className='outline-none w-[300px]'
                {...register("subject")}
                onChange={updateSubject}/>
            <div className='flex flex-row w-auto gap-6'>
                <button type='submit' className='bg-blue-500 w-[100px] h-9 rounded-lg'>
                    Create
                </button>
            </div>
        </form>
    </div>
  )
}

export default CreateSubject
