'use client'

import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


const CreateQuizItem = (props: {[key: string]: any}) => {
    const validity = yup.object().shape({
        problem: yup.string().required(),
        choiceA: yup.string().required(),
        choiceB: yup.string().required(),
        choiceC: yup.string().required(),
        choiceD: yup.string().required(),
        answer: yup.string().required(),
    })

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(validity)
    })

    const [problem, setProblem] = useState<string>("");
    const [choiceA, setChoiceA] = useState<string>("");
    const [choiceB, setChoiceB] = useState<string>("");
    const [choiceC, setChoiceC] = useState<string>("");
    const [choiceD, setChoiceD] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");

    const updateProblem = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setProblem(event.target.value);
    }

    const updateChoiceA = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChoiceA(event.target.value);
    }

    const updateChoiceB = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChoiceB(event.target.value);
    }

    const updateChoiceC = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChoiceC(event.target.value);
    }

    const updateChoiceD = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChoiceD(event.target.value);
    }

    const updateAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    }

    const createQuizItem = async(): Promise<void> => {
        const url = 'https://spark-9bqv.onrender.com/api/v1/quiz_items';
        await axios.post(url, {
            problem: problem,
            answer: answer,
            first_choice: choiceA,
            second_choice: choiceB,
            third_choice: choiceC,
            fourth_choice: choiceD
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${localStorage.getItem("quizToken")}`
            }
        }).then((response: AxiosResponse<any, any>) => {
            console.log(response);
            props.setState(!props.state)
        }).catch((errors) => console.log(errors))
    }

  return (
    <form
        method='POST'
        className='flex flex-col w-full justify-between h-auto items-center gap-6'
        onSubmit={handleSubmit(createQuizItem)}
        style={{display: !props.state? "none" : "flex"}}>
        <div className='flex flex-col w-full gap-4 mt-4'>
            <label htmlFor='problem-input' className='text-white'>Enter Problem</label>
            <textarea
                {...register("problem")}
                id='problem-input'
                className='outline-none p-4'
                onChange={updateProblem}/>
        </div>
        <div className='flex flex-row w-full gap-4'>
            <label htmlFor='first-choice-input'>A:</label>
            <input
                {...register("choiceA")}
                id='first-choice-input'
                className='outline-none pl-2'
                onChange={updateChoiceA}/>
        </div>
        <div className='flex flex-row w-full gap-4'>
            <label htmlFor='second-choice-input'>B:</label>
            <input
                {...register("choiceB")}
                id='second-choice-input'
                className='outline-none pl-2'
                onChange={updateChoiceB}/>
        </div>
        <div className='flex flex-row w-full gap-4'>
            <label htmlFor='third-choice-input'>C:</label>
            <input
                {...register("choiceC")}
                id='third-choice-input'
                className='outline-none pl-2'
                onChange={updateChoiceC}/>
        </div>
        <div className='flex flex-row w-full gap-4'>
            <label htmlFor='fourth-choice-input'>D:</label>
            <input
                {...register("choiceD")}
                id='fourth-choice-input'
                className='outline-none pl-2'
                onChange={updateChoiceD}/>
        </div>
        <div className='flex flex-row w-full gap-4'>
            <label htmlFor='answer-input'>Answer:</label>
            <input
                {...register("answer")}
                id='answer-input'
                className='outline-none pl-2'
                onChange={updateAnswer}/>
        </div>

        <button
            type='submit'
            className='w-[150px] h-11 border-none bg-pink-600 rounded-xl hover:bg-pink-300 active:bg-pink-600'>
            Create Quiz Item
        </button>
    </form>
  )
}

export default CreateQuizItem
