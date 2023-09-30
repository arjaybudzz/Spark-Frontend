import React from 'react'
import Mathematics from '@/components/mathematics/Mathematics'
import Science from '@/components/science/Science'
import EEProfSubjects from '@/components/eeprofsubjects/EEProfSubjects'

const Practice = () => {
  return (
    <div className='flex flex-col flex-1 justify-center items-center h-screen bg-slate-800 pt-16 overflow-hidden gap-6'>
      <h1 className='text-3xl text-white'>
        Choose A Coverage to Practice
      </h1>
      <div className='flex flex-row w-full h-[500px] gap-5 justify-center items-center'>
        <Mathematics mode={"practice"}/>
        <Science mode={"practice"}/>
        <EEProfSubjects mode={"practice"}/>
      </div>
    </div>
  )
}

export default Practice
