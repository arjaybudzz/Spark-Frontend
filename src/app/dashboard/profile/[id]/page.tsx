'use client';

import React from 'react'
import Post from '@/components/post/Post'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';

const Profile = () => {
    const params = useParams();
    const [firstName, setFirstName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [credibility, setCredibility] = useState<string>("");
    const [postId, setPostId] = useState<string[]>([]);
    const [userId, setUserId] = useState<string>("");

    const getUser = async(): Promise<void> => {
        const url = `https://spark-9bqv.onrender.com/api/v1/users/${params.id}`;
        await axios.get(url).then((response: AxiosResponse<any, any>) => {
            console.log(response);
            setFirstName(response.data.data.attributes.first_name);
            setMiddleName(response.data.data.attributes.middle_name);
            setLastName(response.data.data.attributes.last_name);
            setEmail(response.data.data.attributes.email);
            setCredibility(response.data.data.attributes.credibility);
            setUserId(response.data.data.id);
            const result = response.data.data.relationships.posts.data;
            result.map((element: {[key: string]: string}) => {
                setPostId(postId => [...postId, element.id])
            })

        }).catch((errors) => console.log(errors))
    }

    useEffect(() => {
        getUser();
    }, [])

  return (
    <div className='flex flex-1 justify-center items-center h-screen bg-slate-800 pt-16'>
        <div className='flex flex-row flex-1 h-full'>
            <div className='flex flex-col items-center w-1/4 h-full p-4 gap-4'>
                <div className='flex flex-row items-center h-auto'>
                    <h1 className='text-xl text-gray-300'>
                        Full name:
                    </h1>
                    <h1 className='text-xl text-white'>
                        {firstName} {middleName} {lastName}
                    </h1>
                </div>

                <div className='flex flex-row items-center h-auto'>
                    <h1 className='text-xl text-gray-300'>
                        Email:
                    </h1>
                    <h1 className='text-xl text-white'>
                        {email}
                    </h1>
                </div>

                <div className='flex flex-row items-center h-auto'>
                    <h1 className='text-xl text-gray-300'>
                        Credibility:
                    </h1>
                    <h1 className='text-xl text-white'>
                        {credibility}
                    </h1>
                </div>
            </div>
            <div className='flex flex-col w-3/4 border-[1px] border-gray-600 overflow-hidden overflow-y-scroll'>
                <div className='flex inherit top-0 left-0 right-0 h-14 justify-center items-center bg-sky-500'>
                    <h1 className='text-white text-4xl font-bold'>
                        RECENT POSTS
                    </h1>
                </div>


                <div className='flex flex-col gap-6 p-16 flex-1'>
                    {
                        postId.map((id: string) => {
                            return <Post key={id} postId={id} userId={userId} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
