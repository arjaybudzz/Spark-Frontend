'use client'

import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const CreateTopic = () => {
  const validation = yup.object().shape({
    topicName: yup.string().required(),
    topicDiscussion: yup.string().required()
  })

  const {register, handleSubmit} = useForm({
    resolver: yupResolver(validation)
  })

  const [topicName, setTopicName] = useState<string>("");
  const [topicDiscussion, setTopicDiscussion] = useState<string>("");

  const updateTopicName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopicName(event.target.value);
  }

  const updateTopicDiscussion = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTopicDiscussion(event.target.value);
  }

  const createTopic = async(): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/topics`;
    await axios.post(url, {
      name: topicName,
      discussion: topicDiscussion
    },{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("subjectToken")}`
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
            className='flex flex-col w-full h-auto gap-5'
            onSubmit={handleSubmit(createTopic)}>
            <input
              {...register("topicName")}
              className='outline-none w-full h-11 p-2'
              onChange={updateTopicName}
              placeholder='Insert Topic Name'
              />
            <textarea
              {...register("topicDiscussion")}
              className='w-full p-2 outline-none'
              onChange={updateTopicDiscussion}/>

            <div className='flex flex-row w-auto gap-6'>
              <button
              type='submit'
                className='bg-blue-500 w-[100px] h-9 rounded-lg hover:bg-blue-800 active:bg-blue-500'>
                  Create
              </button>
            </div>
          </form>
    </div>
  )
}

export default CreateTopic
