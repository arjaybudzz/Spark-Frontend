'use client';

import React from 'react'
import upvoteIcon from 'src/images/icons8-thumbs-up-24.png'
import downvoteIcon from 'src/images/icons8-thumbs-down-24.png'
import Image from 'next/image'
import Reply from '../reply/Reply'
import { useState, useEffect } from 'react';
import type { Comment } from '@/models/comment';
import CreateReply from '../createReply/CreateReply';
import axios, { AxiosResponse } from 'axios';

const Comment = (props: {[key: string]: any}) => {

  const [commentBody, setCommentBody] = useState<string>("");
  const [upVote, setUpVote] = useState<number>(0);
  const [downVote, setDownVote] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [replyId, setReplyId] = useState<string[]>([]);
  const [currentUser, setCurrentUser] = useState<{[key: string]: any}>({});

  const [isReplyClicked, setIsReplyClicked] = useState<boolean>(false);
  const [isUpvoteClicked, setIsUpvoteClicked] = useState<boolean>(false);
  const [isDownvoteClicked, setIsDownvoteClicked] = useState<boolean>(false);
  const [isEditedClicked, setIsEditedClicked] = useState<boolean>(false);

  const updateIsReplyClicked = (): void => {
    setIsReplyClicked(!isReplyClicked);
  }

  const updateCommentBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentBody(event.target.value);
  }

  const getComment = async(): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/comments/${props.commentId}`;
    await axios.get(url).then((response: AxiosResponse<any, any>) => {
      console.log(response.data.data.relationships.replies);
      setCommentBody(response.data.data.attributes.body);
      setName(response.data.data.attributes.user_name);
      const result = response.data.data.relationships.replies.data;
      result.map((elements: {[key: string]: any}) => {
        setReplyId(replyId => [...replyId, elements.id])
      })
    }).catch((errors) => console.log(errors))
  }

  const getUpVoteAndDownVote = async(): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/comments/${props.commentId}`;
    await axios.get(url).then((response: AxiosResponse<any, any>) => {
      console.log(response);
      setUpVote(response.data.data.attributes.upvote)
      setDownVote(response.data.data.attributes.downvote)
    }).catch((errors) => console.log(errors))
  }

  const updateComment = async(data: string): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/comments/${props.commentId}`;
    await axios.put(url, {
        body: data
    }).then((response: AxiosResponse<any, any>) => {
        console.log(response)
    }).catch((errors) => console.log(errors))
  }

  const upVoteComment = async(): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/comments/${props.commentId}`;
    await axios.put(url, {
        upvote: !isUpvoteClicked? upVote + 1 : upVote - 1
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("userToken")
        }
    }).then((response: AxiosResponse<any, any>) => {
        console.log(response)
    }).catch((errors) => console.log(errors))
  }

  const downVoteComment = async(): Promise<void> => {
      const url = `http://127.0.0.1:3001/api/v1/comments/${props.commentId}`;
      await axios.put(url, {
          downvote: !isDownvoteClicked? downVote + 1 : downVote - 1
      }, {
          headers: {
              "Content-Type": "application/json",
              "Authorization": localStorage.getItem("userToken")
          }
      }).then((response: AxiosResponse<any, any>) => {
          console.log(response)
      }).catch((errors) => console.log(errors))
  }

  const storeCommentToken = async(): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/comment_tokens?comment[body]=${commentBody}`;

    await axios.post(url).then((response: AxiosResponse<any, any>) => {
        console.log(response.data.comment_token);
        localStorage.setItem("commentToken", response.data.comment_token);
    }).catch((errors) => console.log(errors))
  }

  const editComment = async(data: string): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/comment/${props.commentId}`;
    await axios.put(url, {
        body: data
    }).then((response: AxiosResponse<any, any>) => {
        console.log(response)
    }).catch((errors) => console.log(errors))
  }

  const deleteComment = async(): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/comments/${props.commentId}`;
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
    const url = `http://127.0.0.1:3001/api/v1/users/${localStorage.getItem("userId")}`;
    await axios.get(url).then((response: AxiosResponse<any, any>) => {
        console.log(response)
        setCurrentUser(response.data.data.attributes);
    }).catch((errors) => console.log(errors))
  }

  useEffect(() => {
    getComment();
    getCurrentUser();
  }, [])

  useEffect(() => {
    getUpVoteAndDownVote();
  }, [getUpVoteAndDownVote])

  return (
    <div
      className='flex-col w-full h-auto bg-slate-900 mt-4 border-[1px] border-dashed rounded-md p-2'
      style={{display: props.isCommentClicked? "flex" : "none"}}>
      <div className='flex flex-col justify-start items-start p-4'>
        <h1 className='text-md text-white mb-2'>
          {name}
        </h1>
        {isEditedClicked?
                <form
                    className='flex flex-col w-full h-auto justify-start items-center gap-2'
                    method='PUT'
                    onSubmit={() => updateComment(commentBody)}>
                <textarea value={commentBody} className='w-full h-[200px] p-8 bg-slate-500' onChange={updateCommentBody} required/>
                <button
                    type='submit'
                    className='bg-blue-500 w-[150px] h-11 self-start rounded-xl hover:bg-blue-300 active:bg-blue-500'>
                    Confirm
                </button>
                </form>
            :
            <p className='text-lg text-white indent-7 text-justify break-all'>
                {commentBody}
            </p>

            }
      </div>
      <div className='flex flex-row flex-1 pl-4 gap-2 items-center'>
        <div className='flex flex-row gap-2'>
          <button
            onClick={() => {
              setIsUpvoteClicked(!isUpvoteClicked);
              upVoteComment();
            }}
            disabled={isDownvoteClicked? true : false}>
            <Image src={upvoteIcon} width={24} height={24} alt='upvote icon'/>
          </button>
          <span
            className='text-lg text-neutral-400'
            style={{color: isUpvoteClicked? "green" : "gray"}}>
            {upVote}
          </span>
        </div>

        <div className='flex flex-row gap-2'>
          <button
            onClick={() => {
              setIsDownvoteClicked(!isDownvoteClicked);
              downVoteComment();
            }}
            disabled={isUpvoteClicked? true: false}>
            <Image src={downvoteIcon} width={24} height={24} alt='upvote icon'/>
          </button>
          <span
            className='text-lg text-neutral-400'
            style={{color: isDownvoteClicked? "red" : "gray"}}>
            {downVote}
          </span>
        </div>

        <button onClick={() => {
          updateIsReplyClicked();
          storeCommentToken();
          }} className='text-gray-500 hover:text-white active:text-gray-500'>
          Reply
        </button>
        {name == `${currentUser.first_name} ${currentUser.middle_name} ${currentUser.last_name}` && <div className='flex flex-row w-auto h-auto gap-2'>
                    <button className='text-gray-500 hover:text-white active:text-gray-500' onClick={() => {
                        setIsEditedClicked(!isEditedClicked);
                    }}>
                        Edit
                    </button>
                    <button
                        className='text-gray-500 hover:text-white active:text-gray-500'
                        onClick={() => deleteComment()}>
                        Delete
                    </button>
                </div>}
      </div>
      {
        replyId.map((id: string) => {
          return <Reply isReplyClicked={isReplyClicked} userName={name} key={id} replyId={id} />
        })
      }
      <CreateReply userName={`${currentUser.first_name} ${currentUser.middle_name} ${currentUser.last_name}`} isReplyClicked={isReplyClicked}/>
    </div>
  )
}

export default Comment
