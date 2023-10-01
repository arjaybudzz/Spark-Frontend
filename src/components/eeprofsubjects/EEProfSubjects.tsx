import React from 'react'
import Link from 'next/link'

const EEProfSubjects = (props: {[key: string]: string}) => {
  return (
    <div className='flex flex-col w-1/4 h-full justify-end border-2 bg-ee-background bg-cover'>
      <Link href={`/${props.majorFolder}/${props.mode}/${props.coverageName}`} className='w-full h-1/2 bg-black bg-opacity-80 hover:bg-opacity-60 duration-300 p-4'>
        <h1 className='text-white text-4xl font-bold'>Electrical Engineering Professional Subjects</h1>
      </Link>
    </div>
  )
}

export default EEProfSubjects
