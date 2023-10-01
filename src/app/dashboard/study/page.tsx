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
        <Mathematics majorFolder={"dashboard"} mode={"study"} coverageName={"Engineering+Mathematics"}/>
        <Science majorFolder={"dashboard"} mode={"study"} coverageName={"Engineering+Sciences+And+Allied+Subjects"}/>
        <EEProfSubjects majorFolder={"dashboard"} mode={"study"} coverageName={"Electrical+Engineering+Professional+Subjects"}/>
      </div>
    </div>
  )
}

export default Study
