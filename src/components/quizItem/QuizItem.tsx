'use client';

import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios';

const QuizItem = (props: {[key: string]: any}) => {

  const [answer, setAnswer] = useState<string>("");

  const getQuizAnswers = async(): Promise<void> => {
    const url = `https://spark-9bqv.onrender.com/api/v1/quiz_items/${props.quizItemId}`;

    await axios.get(url).then((response: AxiosResponse<any, any>) => {
      const result = response.data.included;
      result.map((element: {[key: string]: any}) => {
        if (element.type === "quiz_answer") {
          localStorage.setItem("quizAnswerId", element.id)
        }
      })
    }).catch((errors) => console.log(errors))
  }

  useEffect(() => {
    getQuizAnswers();
  }, [])

  const enterQuizAnswer = async(givenAnswer: string): Promise<void> => {
    const url = `https://spark-9bqv.onrender.com/api/v1/quiz_answers/${localStorage.getItem("quizAnswerId")}`;
    await axios.put(url,{
      answer: givenAnswer
    }).then((response: AxiosResponse<any, any>) => {
      console.log(response);
    }).catch(errors => console.log(errors))
  }

  const isRadioButtonSelected = (value: string): boolean => answer === value

  return (
    <div className='w-3/4 h-auto bg-slate-800 p-4'>
      <form
        className='flex flex-col w-full h-auto gap-4'
        method="PUT"
        >
        <p className='text-xl text-white'>
          {props.quizProblem}
        </p>
        <div className='flex flex-row justify-start items-center gap-6'>
          <input
            type='radio'
            id='first-choice-input'
            value={props.firstChoice}
            name='quiz-answer'
            checked={isRadioButtonSelected(props.firstChoice)}
            onClick={() => {
              setAnswer(props.firstChoice);
              enterQuizAnswer(props.firstChoice);
            }}
            />
          <label htmlFor='first-choice-input' className='text-xl text-white'>
            {props.firstChoice}
          </label>
        </div>

        <div className='flex flex-row justify-start items-center gap-6'>
          <input
            type='radio'
            id='second-choice-input'
            value={props.secondChoice}
            name='quiz-answer'
            checked={isRadioButtonSelected(props.secondChoice)}
            onClick={() => {
              setAnswer(props.firstChoice);
              enterQuizAnswer(props.firstChoice);
            }}/>
          <label htmlFor='second-choice-input' className='text-xl text-white'>
            {props.secondChoice}
          </label>
        </div>

        <div className='flex flex-row justify-start items-center gap-6'>
          <input
            type='radio'
            id='third-choice-input'
            value={props.thirdChoice}
            name='quiz-answer'
            checked={isRadioButtonSelected(props.thirdChoice)}
            onClick={() => {
              setAnswer(props.firstChoice);
              enterQuizAnswer(props.firstChoice);
            }}/>
          <label htmlFor='third-choice-input' className='text-xl text-white'>
            {props.thirdChoice}
          </label>
        </div>

        <div className='flex flex-row justify-start items-center gap-6'>
          <input
            type='radio'
            id='fourth-choice-input'
            value={props.fourthChoice}
            name='quiz-answer'
            checked={isRadioButtonSelected(props.fourthChoice)}
            onClick={() => {
              setAnswer(props.firstChoice);
              enterQuizAnswer(props.firstChoice);
            }}/>
          <label htmlFor='fourth-choice-input' className='text-xl text-white'>
            {props.fourthChoice}
          </label>
        </div>
      </form>
    </div>
  )
}

export default QuizItem
