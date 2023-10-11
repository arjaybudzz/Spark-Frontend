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

  const storeQuizItemToken = async(): Promise<void> => {
    const url = `https://spark-9bqv.onrender.com/api/v1/quiz_item_tokens?quiz_item[problem]=${props.quizProblem}`;

    await axios.post(url).then((response: AxiosResponse<any, any>) => {
      console.log(response.data.quiz_item_token);
      localStorage.setItem("quizItemToken", response.data.quiz_item_token);
    }).catch((errors) => console.log(errors))
  }

  const enterQuizAnswer = async(givenAnswer: string): Promise<void> => {
    const url = `https://spark-9bqv.onrender.com/api/v1/quiz_answers/${localStorage.getItem("quizAnswerId")}`;
    await axios.put(url,{
      answer: givenAnswer
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("quizItemToken")
      }
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
              storeQuizItemToken();

              setTimeout(() => {
                setAnswer(props.firstChoice);
                enterQuizAnswer(props.firstChoice);
              }, 1000)
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
              storeQuizItemToken();

              setTimeout(() => {
                setAnswer(props.secondChoice);
                enterQuizAnswer(props.secondChoice);
              }, 1000)
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
              storeQuizItemToken();

              setTimeout(() => {
                setAnswer(props.thirdChoice);
                enterQuizAnswer(props.thirdChoice);
              }, 1000)
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
              storeQuizItemToken();

              setTimeout(() => {
                setAnswer(props.fourthChoice);
                enterQuizAnswer(props.fourthChoice);
              }, 1000)
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
