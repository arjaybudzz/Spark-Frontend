'use client'

import CreatePost from '@/components/createpost/CreatePost'
import Post from '@/components/post/Post'
import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useAmp } from 'next/amp'

const DashBoard = () => {
  const [postList, setPostList] = useState<object[]>([]);
  const [userNameId, setUserNameId] = useState<string>("");
  const [userName, setUserName] = useState<{[key: string]: any}>({});

  const getAllPosts = async(): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/posts`;

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
            return <Post userId={element.relationships.user.data.id} body={element.attributes.body} upVote={element.attributes.upvote} downVote={element.attributes.downvote} key={element.id} postId={element.id}/>
          })
        }
      </div>
    </div>
  )
}

export default DashBoard
