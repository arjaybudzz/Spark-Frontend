'use client';

import React from 'react'

const CreatePost = () => {
  return (
    <div className='flex flex-col justify-start items-start flex-4/5 border-0 shadow-2xl min-h-11 p-8 rounded-2xl bg-slate-900 mb-16'>
        <button className='bg-gray-500 w-32 h-10 rounded-3xl mb-4'>
            Create a Post
        </button>
        <textarea className=' w-full rounded-xl p-6 bg-slate-500 outline-none'/>
    </div>
  )
}

export default CreatePost
