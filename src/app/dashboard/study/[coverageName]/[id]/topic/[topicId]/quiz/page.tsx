import React from 'react'
import Link from 'next/link'

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

const QuizList = () => {
  return (
    <div className='flex flex-col flex-1 justify-start items-center h-screen bg-slate-800 pt-16 overflow-hidden gap-6'>
      <h1 className='text-4xl text-white font-bold'>
        SELECT DIFFICULTY
      </h1>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='flex flex-col justify-center items-center w-1/2 h-1/2 border-2 gap-6'>
          {
            difficulty.map((element: {[key: string]: any}) => {
              return <Link href="./quiz/1" key={element.id} className='text-white text-2xl font-bold hover:underline'>
                {element.diff}
              </Link>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default QuizList
