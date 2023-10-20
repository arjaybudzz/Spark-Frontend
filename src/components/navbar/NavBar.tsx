/* eslint-disable react/jsx-key */
'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import studyIcon from 'src/images/studying.png'
import axios, { AxiosResponse } from 'axios'
import { useParams } from 'next/navigation'
import { Input } from '@mui/material'

const directories = [
  {
    id: 3,
    icon: studyIcon,
    name: "Study",
    link: "/dashboard/study/coverage"
  },
]

export const NavBar = () => {
  const [userName, setUserName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const getUser = async(): Promise<void> => {
    const url = `https://spark-9bqv.onrender.com/api/v1/users/${sessionStorage.getItem("userId")}`;

    await axios.get(url)
    .then((response: AxiosResponse<any, any>) => {
      console.log(response.data.data);
      setUserName(response.data.data.attributes.first_name);
      setUserId(response.data.data.id);
    }).catch((errors) => console.log(errors))
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div className='flex flex-1 flex-row justify-between items-center bg-gradient-to-r from-blue-800 to-pink-600 h-14 p-6 fixed right-0 left-0'>
      <div className='flex flex-1/4'>
        <Link href="/dashboard" className='text-2xl'>Spark</Link>
      </div>
      <div className="flex w-1/2 justify-center items-center h-10">
        <Input fullWidth/>
      </div>

      <div className='flex flex-1/4 flex-row w-auto gap-6'>
        <Link href={`/dashboard/profile/${userId}`} className='text-xl text-white font-bold'>{userName}</Link>
        <Link href={"/"} className='text-xl text-white font-bold'>
          Log out
        </Link>
      </div>
    </div>
  )
}
