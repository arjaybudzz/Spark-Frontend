
import CreatePost from '@/components/createpost/CreatePost'
import Post from '@/components/post/Post'
import React from 'react'

const DashBoard = () => {
  return (
    <div className='flex flex-1 justify-center items-center h-screen bg-homepage-background bg-cover p-16 overflow-hidden overflow-y-scroll'>
      <div className='flex flex-col w-[600px] h-full'>
        <CreatePost />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default DashBoard
