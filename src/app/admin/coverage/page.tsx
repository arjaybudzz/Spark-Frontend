'use client'

import CreateCoverage from '@/components/createCoverage/CreateCoverage'
import EEProfSubjects from '@/components/eeprofsubjects/EEProfSubjects'
import Mathematics from '@/components/mathematics/Mathematics'
import Science from '@/components/science/Science'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Coverage = () => {

  const [coverage, setCoverage] = useState<{[key: string]: any}[]>([])

  const getCoverage = async(): Promise<void> => {
    const url = 'http://0.0.0.0:3001/api/v1/subject_coverages';

    await axios.get(url).then((response: AxiosResponse<any ,any>) => {
      console.log(response.data.data);
      const result = response.data.data;

      result.map((element: {[key: string]: any}) => {
        setCoverage(coverage => [...coverage, element])
      })
    }).catch((errors) => console.log(errors))
  }

  useEffect(() => {
    getCoverage();
  }, [getCoverage])


  return (
    <div className='flex flex-col flex-1 h-screen justify-center items-center bg-homepage-background bg-cover p-20 gap-10'>
      <CreateCoverage />
      <div className='flex flex-row w-full h-screen justify-around items-center'>
        <Mathematics majorFolder={"admin"} coverageName={coverage[0]?.attributes.name} mode={"coverage"}/>
        <Science majorFolder={"admin"} coverageName={coverage[1]?.attributes.name} mode={"coverage"}/>
        <EEProfSubjects majorFolder={"admin"} coverageName={coverage[2]?.attributes.name} mode={"coverage"}/>
      </div>
    </div>
  )
}

export default Coverage
