import React from 'react'
import Image from 'next/image'
import Post from '@/components/post/Post'

const data: {[key: string]: any} =
    {
        id: 1,
        firstName: "Juan",
        middleName: "Nothing",
        lastName: "Dela Cruz",
        email: "juandelacruz@gmail.com",
        credibility: 0
    }

const Profile = () => {
  return (
    <div className='flex flex-1 justify-center items-center h-screen bg-slate-800 pt-16'>
        <div className='flex flex-row flex-1 h-full'>
            <div className='flex flex-col w-1/4 h-full p-4 gap-4'>
                {
                    Object.entries(data).map(([key, value]) => {
                        return <h1 key={key} className='text-white text-xl font-bold'>
                                    <span className='text-gray-200 font-thin'>{key}</span>: {value}
                                </h1>
                    })
                }
            </div>
            <div className='flex flex-col w-3/4 border-[1px] border-gray-600 overflow-hidden overflow-y-scroll'>
                <div className='flex inherit top-0 left-0 right-0 h-14 justify-center items-center bg-sky-500'>
                    <h1 className='text-white text-4xl font-bold'>
                        RECENT POSTS
                    </h1>
                </div>
                <div className='flex flex-col gap-6 p-16 flex-1'>
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
