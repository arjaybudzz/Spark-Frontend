'use client'

import CreatePost from '@/components/createpost/CreatePost'
import Post from '@/components/post/Post'
import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'

const DashBoard = () => {
  const router = useRouter();
  const [postList, setPostList] = useState<object[]>([]);

  const getAllPosts = async(): Promise<void> => {
    const url = `https://spark-9bqv.onrender.com/api/v1/posts`;

    await axios.get(url).then((response: AxiosResponse<any, any>) => {
      console.log(response.data);
      const result = response.data.data;
      result.map((element: {[key: string]: any}) => {
        setPostList(postList => [...postList, element])
      })
    }).catch((errors) => console.log(errors))
  }

  useEffect(() => {
    getAllPosts();
  }, [])

  return (
    <div className='flex flex-1 justify-center items-center h-screen bg-homepage-background bg-cover p-16 overflow-hidden overflow-y-scroll'>
      <div className='flex flex-col w-[600px] h-full'>
        <CreatePost />
        {
          postList.map((element: {[key: string]: any}) => {
            return <Post userId={element.relationships.user.data.id} key={element.id} postId={element.id} postFunction={router.refresh} />
          })
        }
      </div>
    </div>
  )
}

export default DashBoard
