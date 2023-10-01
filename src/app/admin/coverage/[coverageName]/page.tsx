'use client'

import CreateSubject from '@/components/createSubject/CreateSubject'
import Subject from '@/components/subject/Subject'
import React from 'react'
import { useState } from 'react'

const SubjectList = () => {

  const [isAddSubjectClicked, setIsAddSubjectClicked] = useState<boolean>(false);

  const updateIsAddSubjectClicked = () => {
    setIsAddSubjectClicked(!isAddSubjectClicked);
  }

  return (
    <div className='flex flex-col w-screen h-screen justify-start items-center bg-homepage-background bg-cover p-6 gap-6'>
      <h1 className='text-4xl text-white self-start font-bold'>
        SUBJECTS
      </h1>
      <div className='flex flex-col justify-center items-center w-full h-auto'>
        <Subject subjectFolder={"admin/coverage/Engineering+Mathematics"} mode={"topic"}/>
        <Subject subjectFolder={"admin/coverage/Engineering+Mathematics"} mode={"topic"}/>
        {isAddSubjectClicked && <CreateSubject />}
      </div>
      <button
        className='w-[200px] h-11 bg-blue-500 border-none text-xl hover:shadow-2xl hover:shadow-black hover:bg-blue-300 active:bg-blue-500 disabled:bg-gray-500 disabled:shadow-none'
        onClick={updateIsAddSubjectClicked}
        >
        {isAddSubjectClicked? "Cancel" : "Add Subject"}
      </button>
    </div>
  )
}

export default SubjectList
