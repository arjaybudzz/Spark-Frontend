import CreatePost from '@/components/createpost/CreatePost'
import Post from '@/components/post/Post'
import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import getPosts from '../api/v1/getPosts'

const DashBoard = async () => {
  const posts = getPosts();

  return (
    <div className='flex flex-1 justify-center items-center h-screen bg-homepage-background bg-cover p-16 overflow-hidden overflow-y-scroll'>
      <div className='flex flex-col w-[600px] h-full'>
        <CreatePost />
        {(await posts).map((post: {[key: string]: any}, index) => {
          return <Post key={index} body={post.body}/>
        })}
      </div>
    </div>
  )
}

export default DashBoard
