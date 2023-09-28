'use client';

import React from 'react'
import upvoteIcon from 'src/images/icons8-thumbs-up-24.png'
import downvoteIcon from 'src/images/icons8-thumbs-down-24.png'
import Image from 'next/image'
import Reply from '../reply/Reply'
import { useState } from 'react';
import type { Comment } from '@/models/comment';
import CreateReply from '../createReply/CreateReply';

const Comment = (props: {[key: string]: any}) => {

  const [comment, setComment] = useState<Comment>({
    body: "",
    upvote: 0,
    downvote: 0
  })

  const [isReplyClicked, setIsReplyClicked] = useState<boolean>(false);

  const updateIsReplyClicked = (): void => {
    setIsReplyClicked(!isReplyClicked)
  }

  return (
    <div
      className='flex-col w-full h-auto bg-slate-900 mt-4'
      style={{display: props.isCommentClicked? "flex" : "none"}}>
      <div className='flex flex-col justify-start items-start p-4'>
        <h1 className='text-md text-white mb-2'>Juan Dela Cruz</h1>
        <p className='text-sm text-white indent-7 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perspiciatis, alias voluptas dicta est officia accusamus sunt non inventore, natus ipsum neque iusto officiis commodi architecto numquam sit provident quo?</p>
      </div>
      <div className='flex flex-row flex-1 pl-4 gap-2 items-center'>
        <div className='flex flex-row gap-2'>
          <button>
            <Image src={upvoteIcon} width={24} height={24} alt='upvote icon'/>
          </button>
          <span className='text-lg text-neutral-400'>0</span>
        </div>

        <div className='flex flex-row gap-2'>
          <button>
            <Image src={downvoteIcon} width={24} height={24} alt='upvote icon'/>
          </button>
          <span className='text-lg text-neutral-400'>0</span>
        </div>

        <button onClick={updateIsReplyClicked} className='text-gray-500'>
          Reply
        </button>
      </div>
      <Reply isReplyClicked={isReplyClicked}/>
    </div>
  )
}

export default Comment
