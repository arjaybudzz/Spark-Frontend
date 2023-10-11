/* eslint-disable react/jsx-key */
'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import studyIcon from 'src/images/studying.png'
import axios, { AxiosResponse } from 'axios'
import { useParams } from 'next/navigation'

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

      <div className='flex flex-1 justify-center items-center gap-14'>
        {
          directories.map((link: { [key: string]: any }) => {
            return <Link href={link.link} key={link.id} className='text-xl'>
                        <Image src={link.icon} width={35} height={35} alt="icons"/>
                  </Link>
          })
        }
      </div>

      <div className='flex flex-1/4 flex-row w-auto'>
        <Link href={`/dashboard/profile/${userId}`} className='text-xl text-white font-bold'>{userName}</Link>
        <Link href={"/"} className='text-xl text-white font-bold'>
          Log out
        </Link>
      </div>
    </div>
  )
}
