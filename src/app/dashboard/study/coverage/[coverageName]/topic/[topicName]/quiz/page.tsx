'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import CreateQuiz from '@/components/createQuiz/CreateQuiz'
import axios from 'axios'


const difficulty: object[] = [
  {
    id: 1,
    diff: "EASY"
  },
  {
    id: 2,
    diff: "MEDIUM"
  },
  {
    id: 3,
    diff: "HARD"
  }
]

const QuizCategory = () => {

  const [isCreateButtonClicked, setIsCreateButtonClicked] = useState<boolean>(false);

  const updateIsCreateButtonClicked = () => {
    setIsCreateButtonClicked(!isCreateButtonClicked);
  }

  return (
    <div className='flex flex-col w-screen h-screen justify-start items-center bg-homepage-background bg-cover p-16 gap-6'>
      <h1 className='text-4xl text-white font-bold'>
        SELECT DIFFICULTY
      </h1>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='flex flex-col justify-center items-center w-1/2 h-1/2 border-2 gap-6'>
          {
            difficulty.map((element: {[key: string]: any}) => {
              return <Link href={`./quiz/${element.diff}`} key={element.id} className='text-white text-2xl font-bold hover:underline'>
                {element.diff}
              </Link>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default QuizCategory
