import React from 'react'
import Mathematics from '@/components/mathematics/Mathematics'
import Science from '@/components/science/Science'
import EEProfSubjects from '@/components/eeprofsubjects/EEProfSubjects'

const Study = () => {
  return (
    <div className='flex flex-col flex-1 justify-center items-center h-screen bg-slate-800 pt-16 overflow-hidden gap-6'>
      <h1 className='text-3xl text-white'>
        Choose A Coverage to Study
      </h1>
      <div className='flex flex-row w-full h-[500px] gap-5 justify-center items-center'>
        <Mathematics mode={"study"}/>
        <Science mode={"study"}/>
        <EEProfSubjects mode={"study"}/>
      </div>
    </div>
  )
}

export default Study
