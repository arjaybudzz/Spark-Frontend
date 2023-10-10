'use client'

import React from 'react'
import upvoteIcon from 'src/images/icons8-thumbs-up-24.png'
import downvoteIcon from 'src/images/icons8-thumbs-down-24.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import type { Reply } from '@/models/reply'
import axios, { AxiosResponse } from 'axios'

const Reply = (props: {[key: string]: any}) => {

    const [replyBody, setReplyBody] = useState<string>("");
    const [upVote, setUpVote] = useState<number>(0);
    const [downVote, setDownVote] = useState<number>(0);
    const [recentUpVote, setRecentUpVote] = useState<number>(0);
    const [recentDownVote, setRecentDownVote] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [currentUser, setCurrentUser] = useState<{[key: string]: any}>({});

    const [isUpvoteClicked, setIsUpvoteClicked] = useState<boolean>(false);
    const [isDownvoteClicked, setIsDownvoteClicked] = useState<boolean>(false);
    const [isEditedClicked, setIsEditedClicked] = useState<boolean>(false);

    const getReply = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/replies/${props.replyId}`;
        await axios.get(url).then((response: AxiosResponse<any, any>) => {
          console.log(response.data.data);
          setReplyBody(response.data.data.attributes.body);
          setName(response.data.data.attributes.user_name);
        }).catch((errors) => console.log(errors))
    }

    const updateReplyBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReplyBody(event.target.value);
    }

    const addUpVote = () => {
        if (!isUpvoteClicked) {
            setRecentUpVote(recentUpVote + 1)
        }
        else {
            setRecentUpVote(recentUpVote - 1)
        }
    }

    const addDownVote = () => {
        if (!isDownvoteClicked) {
            setRecentDownVote(recentDownVote + 1)
        }
        else {
            setRecentDownVote(recentDownVote - 1)
        }
    }

    const upVoteReply = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/replies/${props.replyId}`;
        await axios.put(url, {
            upvote: !isUpvoteClicked? upVote + 1 : upVote - 1
        }).then((response: AxiosResponse<any, any>) => {
            console.log(response)
        }).catch((errors) => console.log(errors))
    }

    const downVoteReply = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/replies/${props.replyId}`;
        await axios.put(url, {
            downvote: !isDownvoteClicked? downVote + 1 : downVote - 1
        }).then((response: AxiosResponse<any, any>) => {
            console.log(response)
        }).catch((errors) => console.log(errors))
    }

    const getUpVoteAndDownVote = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/replies/${props.replyId}`;
        await axios.get(url).then((response: AxiosResponse<any, any>) => {
          console.log(response);
          setUpVote(response.data.data.attributes.upvote)
          setDownVote(response.data.data.attributes.downvote)
        }).catch((errors) => console.log(errors))
    }

    const editReply = async(data: string): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/replies/${props.replyId}`;
        await axios.put(url, {
            body: data
        }).then((response: AxiosResponse<any, any>) => {
            console.log(response)
        }).catch((errors) => console.log(errors))
      }

    const deleteReply = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/replies/${props.replyId}`;
        await axios.delete(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("postToken")
            }
        }).then((response: AxiosResponse<any, any>) => {
            console.log(response)
        }).catch((errors) => console.log(errors))
      }

    const getCurrentUser = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/users/${localStorage.getItem("userId")}`;
        await axios.get(url).then((response: AxiosResponse<any, any>) => {
            console.log(response)
            setCurrentUser(response.data.data.attributes);
        }).catch((errors) => console.log(errors))
      }


    useEffect(() => {
        getReply();
        getCurrentUser();
    }, [])

    useEffect(() => {
        getUpVoteAndDownVote();
    })

  return (
    <div
        className='flex-col w-4/5 self-center justify-start items-center h-auto mt-4 mb-4'
        style={{display: props.isReplyClicked? "flex" : "none"}}>
            <h1 className='text-md text-white mb-2 self-start'>{name}</h1>
            {isEditedClicked?
                <form
                    className='flex flex-col w-full h-auto justify-start items-center gap-2'
                    method='PUT'
                    onSubmit={() => editReply(replyBody)}>
                <textarea value={replyBody} className='w-full h-[200px] p-8 bg-slate-500' onChange={updateReplyBody} required/>
                <button
                    type='submit'
                    className='bg-blue-500 w-[150px] h-11 self-start rounded-xl hover:bg-blue-300 active:bg-blue-500'>
                    Confirm
                </button>
                </form>
            :
            <p className='text-lg text-white indent-7 text-justify break-all self-start'>
                {replyBody}
            </p>

            }

        <div className='flex flex-row flex-1 gap-2 items-center self-start my-4'>
            <div className='flex flex-row gap-2'>
                <button
                    onClick={() => {
                        setIsUpvoteClicked(!isUpvoteClicked);
                        addUpVote();
                        upVoteReply();
                    }}
                    disabled={isDownvoteClicked? true : false}>
                    <Image src={upvoteIcon} width={24} height={24} alt='upvote icon'/>
                </button>
                <span className='text-lg text-neutral-400'>
                    {upVote}
                </span>
            </div>

            <div className='flex flex-row gap-2'>
                <button
                    onClick={() => {
                        setIsDownvoteClicked(!isDownvoteClicked);
                        addDownVote();
                        downVoteReply();
                    }}
                    disabled={isUpvoteClicked? true : false}>
                    <Image src={downvoteIcon} width={24} height={24} alt='upvote icon'/>
                </button>
                <span className='text-lg text-neutral-400'>
                    {downVote}
                </span>

                {name == `${currentUser.first_name} ${currentUser.middle_name} ${currentUser.last_name}` && <div className='flex flex-row w-auto h-auto gap-2'>
                    <button className='text-gray-500 hover:text-white active:text-gray-500' onClick={() => {
                        setIsEditedClicked(!isEditedClicked);
                    }}>
                        Edit
                    </button>
                    <button
                        className='text-gray-500 hover:text-white active:text-gray-500'
                        onClick={() => deleteReply()}>
                        Delete
                    </button>
                </div>}
            </div>
      </div>
    </div>
  )
}

export default Reply
