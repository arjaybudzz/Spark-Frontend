'use client';

import React, { useEffect } from 'react'
import upvoteIcon from 'src/images/icons8-thumbs-up-24.png'
import downvoteIcon from 'src/images/icons8-thumbs-down-24.png'
import Image from 'next/image'
import { useState } from 'react';
import Comment from '../comment/Comment';
import CreateComment from '../createComment/CreateComment';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';

const Post = (props: {[key: string]: any}) => {
    const router = useRouter();
    const [isUpvoteClicked, setIsUpvoteClicked] = useState<boolean>(false);
    const [isDownvoteClicked, setIsDownvoteClicked] = useState<boolean>(false);
    const [isCommentClicked, setIsCommentClicked] = useState<boolean>(false);
    const [numUpvote, setNumUpVote] = useState<number>(0);
    const [numDownvote, setNumDownVote] = useState<number>(0);
    const [postContent, setPostContent] = useState<string>("");
    const [isEditedClicked, setIsEditedClicked] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<{[key: string]: any}>({})
    const [commentsId, setCommentsId] = useState<string[]>([]);
    const [ownerId, setOwnerId] = useState<string>("");

    const updatePostContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostContent(event.target.value);
    }

    const updateisUpvoteClicked = (): void => {
        setIsUpvoteClicked(!isUpvoteClicked);
    }

    const updateIsCommentClicked = () => {
        setIsCommentClicked(!isCommentClicked);
    }

    const updateIsDownvoteClicked = () : void => {
        setIsDownvoteClicked(!isDownvoteClicked);
    }

    const updatePost = async(data: string): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/posts/${props.postId}`;
        await axios.put(url, {
            body: data
        }).then((response: AxiosResponse<any, any>) => {
            console.log(response)
        }).catch((errors) => console.log(errors))
    }

    const deletePost = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/posts/${props.postId}`;
        await axios.delete(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("userToken")
            }
        }).then((response: AxiosResponse<any, any>) => {
            console.log(response)
            props.postFunction();
        }).catch((errors) => console.log(errors))
    }

    const storePostToken = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/post_tokens?post[body]=${postContent}`;

        await axios.post(url).then((response: AxiosResponse<any, any>) => {
            console.log(response.data.post_token);
            localStorage.setItem("postToken", response.data.post_token);
        }).catch((errors) => console.log(errors))
    }

    const getOwner = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/users/${props.userId}`;

        await axios.get(url).then((response: AxiosResponse<any, any>) => {
            console.log(response.data.data.id);
            console.log(response.data.data.attributes);
            setUserInfo(response.data.data.attributes);
            setOwnerId(response.data.data.id);
        }).catch((errors) => console.log(errors))
    }

    const getPost = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/posts/${props.postId}`;

        await axios.get(url).then((response: AxiosResponse<any, any>) => {
            console.log(response.data.data.id);
            console.log(response.data.data.attributes);
            setPostContent(response.data.data.attributes.body);
            setNumDownVote(response.data.data.attributes.downvote);
            setNumUpVote(response.data.data.attributes.upvote);
        }).catch((errors) => console.log(errors))
    }

    const getUpVoteAndDownVote = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/posts/${props.postId}`;
        await axios.get(url).then((response: AxiosResponse<any, any>) => {
            console.log(response.data.data.relationships.comments.data);
            setNumUpVote(response.data.data.attributes.upvote);
            setNumDownVote(response.data.data.attributes.downvote);
        }).catch((errors) => console.log(errors))
    }

    const upVotePost = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/posts/${props.postId}`;
        await axios.put(url, {
            upvote: !isUpvoteClicked? numUpvote + 1 : numUpvote - 1
        }).then((response: AxiosResponse<any, any>) => {
            console.log(response)

        }).catch((errors) => console.log(errors))
    }

    const downVotePost = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/posts/${props.postId}`;
        await axios.put(url, {
            downvote: !isDownvoteClicked? numDownvote + 1 : numDownvote - 1
        }).then((response: AxiosResponse<any, any>) => {
            console.log(response)
        }).catch((errors) => console.log(errors))
    }

    const getCommentsId = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/posts/${props.postId}`;
        await axios.get(url).then((response: AxiosResponse<any, any>) => {
            console.log(response)
            const result = response.data.data.relationships.comments.data;
            result.map((element: {[key: string]: any}) => {
                setCommentsId(commentsId => [...commentsId, element.id])
            })
        }).catch((errors) => console.log(errors))
    }

    useEffect(() => {
        getOwner();
        getCommentsId();
        getPost();
    }, [])

    useEffect(() => {
        getUpVoteAndDownVote();
    })


  return (
    <div className='flex flex-col h-auto flex-4/5 bg-slate-900 p-4 rounded-xl mb-8'>
        <div className='flex flex-row w-full h-11 justify-between items-center'>
            <h1 className='text-xl text-white'>{userInfo.first_name} {userInfo.middle_name} {userInfo.last_name}</h1>
            {localStorage.getItem("userId") == props.userId && <div className='flex flex-row w-auto h-auto gap-6'>
                    <button className='text-white text-xl' onClick={() => {
                        setIsEditedClicked(!isEditedClicked);
                        storePostToken();
                    }}>
                        Edit
                    </button>
                    <button
                        className='text-white text-xl'
                        onClick={() => deletePost()}>
                        Delete
                    </button>
                </div>}
            </div>
        <div className='flex flex-row justify-between items-center w-full border-2 h-auto border-gray-500 rounded-xl border-dashed mb-5 p-3 mt-7'>
            {isEditedClicked?
                <form
                    className='flex flex-col w-full h-auto justify-start items-center'
                    method='PUT'
                    onSubmit={() => updatePost(postContent)}>
                <textarea value={postContent} className='w-full h-[200px] p-8 bg-slate-500' onChange={updatePostContent} required/>
                <button
                    type='submit'
                    className='bg-blue-500 w-[150px] h-11 self-start rounded-xl hover:bg-blue-300 active:bg-blue-500'>
                    Confirm
                </button>
                </form>
            :
            <p className='text-lg text-white indent-7 text-justify break-all'>
                {postContent}
            </p>

            }
        </div>

        <div className='flex flex-row border-2 border-gray-500 border-dashed rounded-xl justify-between gap-3 items-center'>
            <div className='flex flex-row flex-1 gap-3 pl-3'>
                <div className='flex flex-row justify-center items-center'>
                    <button
                        className='w-[48px] h-[48px]'
                        onClick={() => {
                            updateisUpvoteClicked();
                            upVotePost();
                            }}
                        disabled={isDownvoteClicked? true : false}>
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
                            downVotePost();
                        }}
                        disabled={isUpvoteClicked? true : false}>
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
                onClick={() => {
                    updateIsCommentClicked();
                    storePostToken();
                }}>
                Comments
            </button>
        </div>
        {
            commentsId.map((id: string) => {
                return <Comment isCommentClicked={isCommentClicked} key={id} commentId={id} userName={`${userInfo.first_name} ${userInfo.middle_name} ${userInfo.last_name}`} />
            })
        }
        <CreateComment isCommentClicked={isCommentClicked}/>
    </div>
  )
}

export default Post
