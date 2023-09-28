import React from 'react'

const CreateComment = (props: {[key: string]: any}) => {
  return (
    <div
      className='flex-row flex-1 h-auto bg-slate-900 p-4 mt-6 justify-between items-center' style={{display: props.isCommentClicked? "flex" : "none"}}>
      <textarea className='w-3/4 outline-none h-auto rounded-xl p-2 bg-slate-500' />
      <button className='bg-blue-500 w-[115px] h-11 border-none rounded-lg'>
        Comment
      </button>
    </div>
  )
}

export default CreateComment
