'use client';

import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios';

const CreateReply = (props: {[key: string]: any}) => {
  const [replyBody, setReplyBody] = useState<string>("");

  const updateReplyBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyBody(event.target.value);
  }

  const uploadReply = async(): Promise<void> => {
    const url = "https://spark-9bqv.onrender.com/api/v1/replies";
    await axios.post(url,{
      user_name: props.userName,
      body: replyBody
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("commentToken")
      }
    }).then((response: AxiosResponse<any, any>) => {
      console.log(response);
    }).catch((errors) => console.log(errors))
  }


  return (
    <form
      method='POST'
      onSubmit={uploadReply}
      className='flex flex-col justify-between items-center w-full border-2 p-4 border-gray-500 rounded-lg'
      style={{display: props.isReplyClicked? "flex" : "none"}}>
        <textarea
          className='w-full outline-none h-auto rounded-xl p-2 bg-slate-500'
          required
          onChange={updateReplyBody}/>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-300 w-[115px] h-11 border-none rounded-lg self-end mt-4'>
        Reply
      </button>
    </form>
  )
}

export default CreateReply
