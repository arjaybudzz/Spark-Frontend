import React from 'react'

const CreateTopic = () => {
  return (
    <div
        className='flex flex-row w-4/5 h-auto border-none rounded-md hover:shadow-black hover:shadow-md hover:cursor-pointer p-4 mb-4 border-gray-500 justify-between items-center bg-gradient-to-r from-blue-500 to-pink-500'>
        <input className='outline-none w-[300px]'/>
        <div className='flex flex-row w-auto gap-6'>
            <button className='bg-blue-500 w-[100px] h-9 rounded-lg'>
                Create
            </button>
        </div>
    </div>
  )
}

export default CreateTopic
