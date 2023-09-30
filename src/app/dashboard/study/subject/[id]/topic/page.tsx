import Topic from '@/components/topic/Topic'
import React from 'react'

const TopicList = () => {
  return (
    <div className='flex flex-col flex-1 justify-start items-center h-screen bg-slate-800 pt-16 px-6 overflow-hidden gap-6'>
      <h1 className='text-white font-bold text-5xl self-start'>Topics</h1>
      <div className='flex flex-col w-4/5
       h-auto border-2 justify-center items-center p-4'>
        <Topic mode={"study"}/>
      </div>
    </div>
  )
}

export default TopicList
