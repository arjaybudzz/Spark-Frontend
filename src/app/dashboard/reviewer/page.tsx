import EEProfSubjects from '@/components/eeprofsubjects/EEProfSubjects'
import Mathematics from '@/components/mathematics/Mathematics'
import Science from '@/components/science/Science'
import React from 'react'

const Reviewer = () => {
  return (
    <div className='flex flex-col flex-1 justify-center items-center h-screen bg-slate-800 pt-16 overflow-hidden gap-6'>
      <h1 className='text-3xl text-white'>
        Choose A Coverage to Review
      </h1>
      <div className='flex flex-row w-full h-[500px] gap-5 justify-center items-center'>
        <Mathematics mode={"reviewer"}/>
        <Science mode={"reviewer"}/>
        <EEProfSubjects mode={"reviewer"}/>
      </div>
    </div>
  )
}

export default Reviewer
