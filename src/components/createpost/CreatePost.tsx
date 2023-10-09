'use client';

import React, { useState} from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import axios, { AxiosResponse } from 'axios';

const CreatePost = () => {

  const [postContent, setPostContent] = useState<string>("");

  const updatePostContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(event.target.value);
  }

  const uploadPost = async(): Promise<void> => {
    const url = "http://127.0.0.1:3001/api/v1/posts";
    await axios.post(url,{
      body: postContent
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("userToken")
      }
    }).then((response: AxiosResponse<any, any>) => {
      console.log(response);
    }).catch((errors) => console.log(errors))
  }

  return (
    <form
      method='POST'
      onSubmit={uploadPost}
      className='flex flex-col justify-start items-start flex-4/5 border-0 shadow-2xl min-h-11 p-8 rounded-2xl bg-slate-900 mb-16'>
        <button
          type='submit'
          className='bg-gray-500 w-32 h-10 rounded-3xl mb-4'>
            Create a Post
        </button>
        <textarea
          className=' w-full rounded-xl p-6 bg-slate-500 outline-none'
          onChange={updatePostContent}
          required/>
    </form>
  )
}

export default CreatePost
