'use client'

import SelectedQuiz from '@/components/selectedQuiz/SelectedQuiz'
import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import Quiz from '@/components/quiz/Quiz'
import { useParams } from 'next/navigation'


const QuizList = () => {
  const params = useParams();
  const [difficulty, setDifficulty] = useState<string>("");
  const [quizId, setQuizId] = useState<string[]>([]);

  const getQuizzes = async(): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/topics/${localStorage.getItem("topicId")}`;

    await axios.get(url).then((response: AxiosResponse<any, any>) => {
      const result = response.data.included;
      result.map((element: {[key: string]: any}) => {
        if (element.type === "quiz") {
          if (element.attributes.difficulty === params.quizDifficulty) {
            console.log(element);
            setQuizId(quizId => [...quizId, element.id])
            setDifficulty(element.attributes.difficulty);
          }
        }
      })
    }).catch((errors) => console.log(errors))
  }

  useEffect(() => {
    getQuizzes();
  }, [])

  return (
    <div className='flex flex-col w-screen h-screen justify-start items-center bg-homepage-background bg-cover p-16 gap-6'>
      {
        quizId.map((element: string) => {
          return <Quiz subjectFolder={"dashboard/study"} coverageName={params.coverageName} mode={"coverage"} topicName={params.topicName} difficulty={difficulty} quizId={element} key={element} isAdmin={false}/>
        })
      }

    </div>
  )
}

export default QuizList
