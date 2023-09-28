import React from 'react'
import upvoteIcon from 'src/images/icons8-thumbs-up-24.png'
import downvoteIcon from 'src/images/icons8-thumbs-down-24.png'
import Image from 'next/image'
import { useState } from 'react'
import type { Reply } from '@/models/reply'
import CreateReply from '../createReply/CreateReply'

const Reply = (props: {[key: string]: any}) => {
    const [reply, setReply] = useState<Reply>({
        body: '',
        upvote: 0,
        downvote: 0
    })

    const [isUpvoteClicked, setIsUpvoteClicked] = useState<boolean>(false);
    const [isDownvoteClicked, setIsDownvoteClicked] = useState<boolean>(false);

    const updateReplyBody = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setReply({...reply, body: event.target.value});
    }

    const addUpvote = (): void => {
        if (!isUpvoteClicked) {
            setReply({...reply, upvote: reply.upvote + 1});
        }
        else {
            setReply({...reply, upvote: reply.upvote - 1});
        }

    }

    const addDownvote = (): void => {
        if (!isDownvoteClicked) {
            setReply({...reply, downvote: reply.downvote + 1});
        }
        else {
            setReply({...reply, downvote: reply.downvote - 1});
        }
    }

  return (
    <div
        className='flex-col w-4/5 self-center justify-start items-center h-auto mt-4 mb-4'
        style={{display: props.isReplyClicked? "flex" : "none"}}>
            <h1 className='text-md text-white mb-2 self-start'>Juan Dela Cruz</h1>
            <p className='text-sm text-white indent-7 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis ducimus quisquam culpa odio adipisci officia repellat commodi ipsam aliquam. Tempora, unde perferendis consequatur omnis repudiandae maxime mollitia adipisci doloremque!</p>

        <div className='flex flex-row flex-1 gap-2 items-center self-start my-4'>
            <div className='flex flex-row gap-2'>
                <button
                    onClick={() => {
                        setIsUpvoteClicked(!isUpvoteClicked);
                        addUpvote();
                    }}
                    disabled={isDownvoteClicked? true : false}>
                    <Image src={upvoteIcon} width={24} height={24} alt='upvote icon'/>
                </button>
                <span className='text-lg text-neutral-400'>
                    {reply.upvote}
                </span>
            </div>

            <div className='flex flex-row gap-2'>
                <button
                    onClick={() => {
                        setIsDownvoteClicked(!isDownvoteClicked);
                        addDownvote();
                    }}
                    disabled={isUpvoteClicked? true : false}>
                    <Image src={downvoteIcon} width={24} height={24} alt='upvote icon'/>
                </button>
                <span className='text-lg text-neutral-400'>
                    {reply.downvote}
                </span>
            </div>
      </div>
      <CreateReply />
    </div>
  )
}

export default Reply
