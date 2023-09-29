import React from 'react'

const CreateReply = () => {
  return (
    <div className='flex flex-col justify-between items-center w-full border-2 p-4 border-gray-500 rounded-lg'>
        <textarea className='w-full outline-none h-auto rounded-xl p-2 bg-slate-500'/>
        <button className='bg-blue-500 hover:bg-blue-300 w-[115px] h-11 border-none rounded-lg self-end mt-4'>
        Reply
      </button>
    </div>
  )
}

export default CreateReply
