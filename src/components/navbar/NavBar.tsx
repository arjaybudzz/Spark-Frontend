/* eslint-disable react/jsx-key */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import practiceIcon from 'src/images/practice.png'
import readIcon from 'src/images/reading-book.png'
import studyIcon from 'src/images/studying.png'
import reviewIcon from 'src/images/reviewer.png'
import contactIcon from 'src/images/email.png'
import aboutIcon from 'src/images/info.png'

const directories = [
  {
    id: 1,
    icon: practiceIcon,
    name: "Practice",
    link: "/dashboard/practice"
  },

  {
    id: 2,
    icon: reviewIcon,
    name: "Reviewers",
    link: "/dashboard/reviewer"
  },

  {
    id: 3,
    icon: studyIcon,
    name: "Study",
    link: "/dashboard/study"
  },

  {
    id: 4,
    icon: contactIcon,
    name: "Contact",
    link: "/dashboard/contact"
  },

  {
    id: 5,
    icon: aboutIcon,
    name: "About",
    link: "/dashboard/about"
  }
]

export const NavBar = () => {
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

      <div className='flex flex-1/4'>
        <Link href="/dashboard/profile/1">Name</Link>
      </div>
    </div>
  )
}
