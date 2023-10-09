'use client';
import React from 'react'
import Link from 'next/link';
import axios, { AxiosResponse } from 'axios';

const Subject = (props: {[key: string]: string}) => {

  const storeSubjectToken = async(): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/subject_tokens?subject[name]=${props.subjectName}`;

    await axios.post(url).then((response: AxiosResponse<any, any>) => {
      console.log(response.data.subject_id);
      localStorage.setItem("subjectId", response.data.subject_id);
      localStorage.setItem("subjectToken", response.data.token);
    }).catch((errors) => console.log(errors))
  }

  return (
    <div className='flex flex-row w-4/5 h-auto border-none rounded-md hover:shadow-black hover:shadow-md hover:cursor-pointer p-4 mb-4 border-gray-500 justify-between items-center bg-gradient-to-r from-blue-500 to-pink-500'>
        <h1 className='text-xl text-white'>
          {props.subjectName}
        </h1>
        <div className='flex flex-row'>
          <Link
            href={`/${props.subjectFolder}/${props.mode}`}
            className='text-xl text-white hover:underline'
            onClick={storeSubjectToken}>
              View Topics
          </Link>
        </div>
    </div>
  )
}

export default Subject
