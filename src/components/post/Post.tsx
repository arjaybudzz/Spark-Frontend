'use client';

import React from 'react'
import upvoteIcon from 'src/images/icons8-thumbs-up-24.png'
import downvoteIcon from 'src/images/icons8-thumbs-down-24.png'
import Image from 'next/image'
import { useState } from 'react';
import Comment from '../comment/Comment';
import CreateComment from '../createComment/CreateComment';
import type { PostType } from '@/models/postType';

const Post = () => {
    const [isUpvoteClicked, setIsUpvoteClicked] = useState<boolean>(false);
    const [isDownvoteClicked, setIsDownvoteClicked] = useState<boolean>(false);
    const [isCommentClicked, setIsCommentClicked] = useState<boolean>(false);
    const [numUpvote, setNumUpVote] = useState<number>(0);
    const [numDownvote, setNumDownVote] = useState<number>(0);

    const updateisUpvoteClicked = (): void => {
        setIsUpvoteClicked(!isUpvoteClicked);
    }

    const updateIsCommentClicked = () => {
        setIsCommentClicked(!isCommentClicked);
    }

    const updateIsDownvoteClicked = () : void => {
        setIsDownvoteClicked(!isDownvoteClicked);
    }

    const addUpvote = (): void => {
        if (!isUpvoteClicked) {
            setNumUpVote(numUpvote + 1);
        }
        else {
            setNumUpVote(numUpvote - 1);
        }
    }

    const addDownVote = (): void => {
        if (!isDownvoteClicked) {
            setNumDownVote(numDownvote + 1);
        }
        else {
            setNumDownVote(numDownvote - 1);
        }
    }


  return (
    <div className='flex flex-col h-auto flex-4/5 bg-slate-900 p-4 rounded-xl mb-8'>
        <h1 className='text-xl text-white'>Juan Dela Cruz</h1>
        <div className='w-full border-2 h-auto border-gray-500 rounded-xl border-dashed mb-5 p-3 mt-7'>
            <p className='text-lg text-white indent-7 text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusantium, laboriosam enim saepe quod animi nisi? Necessitatibus reprehenderit consequuntur beatae labore, deleniti odio harum aperiam, magnam quaerat quas perspiciatis culpa.
            </p>
        </div>

        <div className='flex flex-row border-2 border-gray-500 border-dashed rounded-xl justify-between gap-3 items-center'>
            <div className='flex flex-row flex-1 gap-3 pl-3'>
                <div className='flex flex-row justify-center items-center'>
                    <button
                        className='w-[48px] h-[48px]'
                        onClick={() => {updateisUpvoteClicked(); addUpvote();}}>
                        <Image src={upvoteIcon} width={36} height={36} alt="upvote-icon"/>
                    </button>
                    <span
                        className='text-lg'
                        style={{color: isUpvoteClicked? "green" : "gray"}}>
                        {numUpvote}
                    </span>
                </div>

                <div className='flex flex-row justify-center items-center'>
                    <button
                        className='w-[48px] h-[48px]'
                        onClick={() => {
                            updateIsDownvoteClicked();
                            addDownVote();
                        }}>
                        <Image src={downvoteIcon} width={36} height={36} alt="upvote-icon"/>
                    </button>
                    <span
                        className='text-lg text-neutral-400'
                        style={{color: isDownvoteClicked? "red" : "gray"}}>
                        {numDownvote}
                    </span>
                </div>
            </div>


            <button
                className='bg-gray-500 mr-3 w-[100px] h-8 rounded-xl'
                onClick={updateIsCommentClicked}>
                Comments
            </button>
        </div>
        <Comment isCommentClicked={isCommentClicked}/>
        <Comment isCommentClicked={isCommentClicked} />
        <Comment isCommentClicked={isCommentClicked} />
        <CreateComment isCommentClicked={isCommentClicked}/>
    </div>
  )
}

export default Post
