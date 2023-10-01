import React from 'react'
import Link from 'next/link'

const taskList: object[] = [
  {
    id: 1,
    task: "Add Subject",
    method: "POST",
  },
  {
    id: 2,
    task: "Remove a Subject",
    method: "DELETE"
  },
  {
    id: 3,
    task: "Modify a Subject",
    method: "PUT"
  },
  {
    id: 4,
    task: "Add Topic",
    method: "POST"
  },
  {
    id: 5,
    task: "Remove a topic",
    method: "DELETE"
  },
  {
    id: 6,
    task: "Modify a topic",
    method: "PUT"
  },
  {
    id: 7,
    task: "Add a Quiz",
    method: "POST"
  },
  {
    id: 8,
    task: "Remove a Quiz",
    method: "DELETE"
  },
]

const AdminDashBoard = () => {
  return (
    <div className='flex flex-1 justify-center items-center h-screen bg-slate-800 p-16 overflow-hidden overflow-y-scroll'>
      <div className='flex flex-col w-full h-full justify-between items-center'>
        <p className='text-4xl text-white'>Hello Admin! What do you want to do?</p>
        <div className='flex flex-row w-full h-full border-2 flex-wrap gap-10 p-6'>
          {
            taskList.map((element: {[key: string]: any}) => {
              return <div key={element.id} className='flex flex-col flex-1 h-full border-2 justify-center items-center p-6'>
              <Link href="/admin/coverage">
                {element.task}
              </Link>
            </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default AdminDashBoard
