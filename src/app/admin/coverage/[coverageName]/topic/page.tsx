'use client'

import React, { useState } from 'react'
import Topic from '@/components/topic/Topic'
import CreateTopic from '@/components/createTopic/CreateTopic';

const TopicList = () => {

    const [isTopicButtonClicked, setIsTopicButtonClicked] = useState<boolean>(false);

    const updateIsTopicButtonClicked = () => {
        setIsTopicButtonClicked(!isTopicButtonClicked);
    }

  return (
    <div className='flex flex-col w-screen h-screen justify-start items-center bg-homepage-background bg-cover p-6 gap-6'>
        <h1 className='text-white font-bold text-5xl self-start'>Topics</h1>
      <div className='flex flex-col w-4/5
       h-auto justify-center items-center p-4'>
        <Topic mode={"study"}/>
        {isTopicButtonClicked && <CreateTopic />}
      </div>
        <button
            className='w-[200px] h-11 bg-blue-500 border-none text-xl hover:shadow-2xl hover:shadow-black hover:bg-blue-300 active:bg-blue-500 disabled:bg-gray-500 disabled:shadow-none'
            onClick={updateIsTopicButtonClicked}>
            {isTopicButtonClicked? "Cancel" : "Add a Topic"}
        </button>
    </div>
  )
}

export default TopicList
