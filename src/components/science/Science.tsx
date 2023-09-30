import React from 'react'
import Link from 'next/link'

const Science = (props: {[key: string]: string}) => {
  return (
    <div className='flex flex-col w-1/4 h-full justify-end border-2 bg-science-background'>
      <Link href={`/dashboard/${props.mode}/subject`} className='w-full h-1/2 bg-black bg-opacity-80 hover:bg-opacity-60 duration-300 p-4'>
        <h1 className='text-white text-4xl font-bold'>
          Engineering Sciences and Allied Subjects (ESAS)
        </h1>
      </Link>
    </div>
  )
}

export default Science
