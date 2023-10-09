'use client';

import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios';
import { useParams } from 'next/navigation';
import Link from 'next/link'

const Result = () => {
    const params = useParams();
    const [answerSheet, setAnswerSheet] = useState<{[key: string]: any}>({})
    const getResult = async(): Promise<void> => {
        const url = `http://0.0.0.0:3001/api/v1/quizzes/${params.quizId}`;

        await axios.get(url).then((response: AxiosResponse<any, any>) => {
            console.log(response.data.included);
            const result = response.data.included;
            result.map((element: {[key: string]: any}) => {
                if (element.type === "answer_sheet") {
                    setAnswerSheet(element.attributes)
                }
            })
        }).catch((errors) => console.log(errors))
    }

    useEffect(() => {
        getResult();
    }, [getResult])


  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center bg-homepage-background bg-cover p-6 gap-6'>
        <div className='flex flex-col justify-center items-center border-2 w-1/2 h-1/2 gap-10'>
            <h1 className='text-white text-6xl'>
                You Got: {answerSheet.score}/10
            </h1>

            <Link href="/dashboard" className='text-white'>
                Back to Dashboard
            </Link>
        </div>
    </div>
  )
}

export default Result
