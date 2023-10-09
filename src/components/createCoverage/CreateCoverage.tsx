'use client'

import React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios, { AxiosResponse } from 'axios'

const CreateCoverage = () => {

  const validity = yup.object().shape({
    coverageName: yup.string().required()
  })

  const [coverageName, setCoverageName] = useState<string>("");

  const updateCoverageName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoverageName(event.target.value);
  }

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validity)
  })

  const createCoverage = async(): Promise<void> => {
    const url = 'http://127.0.0.1:3001/api/v1/subject_coverages';
    await axios.post(url, {
      name: coverageName
    },{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("adminToken")}`
      }
    }).then((response: AxiosResponse<any, any>) => {
      console.log(response);
    }).catch((errors) => console.log(errors))
  }

  return (
    <div className='flex flex-row w-4/5 h-auto border-none rounded-md hover:shadow-black hover:shadow-md hover:cursor-pointer p-4 mb-4 border-gray-500 justify-between items-center bg-gradient-to-r from-blue-500 to-pink-500'>
        <form
          method='POST'
          className='flex flex-row justify-between items-center w-full'
          onSubmit={handleSubmit(createCoverage)}>
            <input
              {...register("coverageName")}
              placeholder='Enter coverage name...'
              className='w-[300px] h-9 p-2 outline-none'
              onChange={updateCoverageName}/>
            <button
              type='submit'
              className='bg-blue-500 w-[200px] h-9 rounded-lg hover:bg-blue-300 active:bg-blue-500'>
              Create Coverage
            </button>
        </form>
    </div>
  )
}

export default CreateCoverage
