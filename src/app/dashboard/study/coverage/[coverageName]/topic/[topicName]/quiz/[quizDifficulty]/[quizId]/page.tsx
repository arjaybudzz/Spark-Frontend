'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios, { AxiosResponse } from 'axios';
import QuizItem from '@/components/quizItem/QuizItem';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SelectedQuiz = () => {
    const params = useParams();
    const router = useRouter();
    const limit = 3;
    const {quizId} = params;
    const [quizItemList, setQuizItemList] = useState<object[]>([]);
    const [pageNum, setPageNum] = useState<number>(1);

    const getQuizItems = async(page: number): Promise<void> => {
        const url = `http://127.0.0.1:3001/api/v1/quiz_items?page=${page}`;
        await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("quizToken")
          }
        }).then((response: AxiosResponse<any, any>) => {
            console.log(response.data);
            const result = response.data.data;
            result.map((element: {[key: string]: any}) => {
              if (element.type === "quiz_item") {
                setQuizItemList(quizItemList => [...quizItemList, element])
              }
            })
        }).catch((errors) => console.log(errors))
    }

    useEffect(() => {
        getQuizItems(pageNum);
    }, [pageNum])


  return (
    <div className='flex flex-col w-screen h-screen justify-start items-center bg-homepage-background bg-cover p-16 gap-6 overflow-y-scroll'>
      <div className='flex flex-col w-full h-auto gap-5'>
      {
        quizItemList.map((element: {[key: string]: any}) => {
          return <div key={element.id} className='flex flex-col justify-center items-center w-full h-auto'>
                    <QuizItem
                    key={element.id}
                    quizProblem={element.attributes.problem}
                    firstChoice={element.attributes.first_choice}
                    secondChoice={element.attributes.second_choice}
                    thirdChoice={element.attributes.third_choice}
                    fourthChoice={element.attributes.fourth_choice}
                    quizItemId={element.id}/>

                  </div>
        })
      }

                  { pageNum === limit?

                    <Link href={`./${quizId}/result`} className='h-11 self-center disabled:bg-gray-400 text-white text-xl hover:underline'>
                    Submit Answers
                    </Link>

                  :
                  <button
                  onClick={() => setPageNum(pageNum + 1)}
                  className='w-1/5 h-11 bg-pink-500 self-center disabled:bg-gray-400 text-white text-xl'
                  >
                    View Next Problem
                </button>

                }
      </div>
    </div>
  )
}

export default SelectedQuiz
