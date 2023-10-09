'use client';

import React, { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios, { AxiosResponse } from 'axios';

const CreateQuiz = () => {
  const validity = yup.object().shape({
    difficulty: yup.string().required()
  })

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validity)
  })

  const [difficulty, setDifficulty] = useState<string>("");

  const updateDifficulty = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDifficulty(event.target.value);
  }

  const createQuiz = async(): Promise<void> => {
    const url = 'http://127.0.0.1:3001/api/v1/quizzes';
    await axios.post(url, {
      difficulty: difficulty
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("topicToken")}`
      }
    }).then((response: AxiosResponse<any, any>) => {
      console.log(response);
    }).catch((errors) => console.log(errors))
  }

  return(
    <div className='flex flex-row w-4/5 h-auto border-none rounded-md hover:shadow-black hover:shadow-md hover:cursor-pointer p-4 mb-4 border-gray-500 justify-between items-center bg-gradient-to-r from-blue-500 to-pink-500'>
        <form
          method='POST'
          onSubmit={handleSubmit(createQuiz)}
          className='flex flex-row w-full justify-between items-center'>
          <input
            {...register("difficulty")}
            placeholder='Enter difficulty: EASY, MEDIUM or HARD'
            onChange={updateDifficulty}
            className='w-[350px] h-8 p-4'/>
          <button
            type='submit'
            className='bg-blue-500 w-[100px] h-9 rounded-lg'
            >Create</button>
        </form>
    </div>
  )
}

export default CreateQuiz
