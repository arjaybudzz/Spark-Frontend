import EEProfSubjects from '@/components/eeprofsubjects/EEProfSubjects'
import Mathematics from '@/components/mathematics/Mathematics'
import Science from '@/components/science/Science'
import React from 'react'

const Coverage = () => {
  return (
    <div className='flex flex-row flex-1 h-screen justify-center items-center bg-homepage-background bg-cover p-20 gap-10'>
      <Mathematics majorFolder={"admin"} mode={"coverage"} coverageName={"Engineering+Mathematics"}/>
      <Science majorFolder={"admin"} mode={"coverage"} coverageName={"Engineering+Sciences+And+Allied+Subjects"} />
      <EEProfSubjects majorFolder={"admin"} mode={"coverage"} coverageName={"Electrical+Engineering+Professional+Subjects"} />
    </div>
  )
}

export default Coverage
