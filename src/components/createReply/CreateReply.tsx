import React from 'react'

const CreateReply = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full border-2 p-4 border-gray-500 rounded-lg'>
        <textarea className='w-2/3 outline-none h-auto rounded-xl p-2 bg-slate-500'/>
        <button className='bg-blue-500 w-[115px] h-11 border-none rounded-lg'>
        Reply
      </button>
    </div>
  )
}

export default CreateReply
