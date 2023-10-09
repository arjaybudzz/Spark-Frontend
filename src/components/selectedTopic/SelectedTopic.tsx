'use client'

import React from 'react'
import Link from 'next/link'

const SelectedTopic = (props: {[key: string]: any}) => {

      return (
        <div className='flex flex-col flex-1 justify-start items-center h-screen bg-homepage-background bg-cover p-16 overflow-hidden overflow-y-scroll gap-6'>
          <div className='bg-blue-900 h-16 flex fixed top-15 left-0 right-0 justify-center items-center'>
            <h1 className='text-4xl text-white font-bold'>
              {props.topicName}
            </h1>
          </div>
          <div className='pt-32 px-5 indent-10 text-justify'>
            <p className='text-xl text-white'>
                {props.topicDiscussion}
            </p>
          </div>

          <p className='text-white text-2xl mb-7'>
            <Link
              href={`/${props.majorFolder}/coverage/${props.coverageName}/topic/${props.topicName}/quiz`} className='text-blue-500 hover:underline'>View quizzes for this topic.</Link>
          </p>
        </div>
      )

  return (
    <div>SelectedTopic</div>
  )
}

export default SelectedTopic
