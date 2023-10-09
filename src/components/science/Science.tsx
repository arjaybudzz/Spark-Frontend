import React from 'react'
import Link from 'next/link'
import axios, { AxiosResponse } from 'axios'

const Science = (props: {[key: string]: string}) => {

  const storeCoverageToken = async(): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/subject_coverage_tokens?subject_coverage[name]=${props.coverageName}`;

    await axios.post(url).then((response: AxiosResponse<any, any>) => {
      console.log(response.data.coverage_token);
      localStorage.setItem("coverageToken", response.data.coverage_token);
      localStorage.setItem("coverageId", response.data.id)
    }).catch((errors) => console.log(errors))
  }

  return (
    <div className='flex flex-col w-1/4 h-full justify-end border-2 bg-science-background'>
      <Link href={`/${props.majorFolder}/${props.mode}/${props.coverageName}`} className='w-full h-1/2 bg-black bg-opacity-80 hover:bg-opacity-60 duration-300 p-4'
      onClick={storeCoverageToken}>
        <h1 className='text-white text-4xl font-bold'>
          Engineering Sciences and Allied Subjects (ESAS)
        </h1>
      </Link>
    </div>
  )
}

export default Science
