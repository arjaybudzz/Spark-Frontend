import React from 'react'

const data: object[] = [
    {
      id: "option-a",
      label: "A. 9.8m/s2",
      index: 1
    },
    {
      id: "option-b",
      label: "B.9.8m/s2",
      index: 2
    },
    {
      id: "option-c",
      label: "C.32m/s2",
      index: 3
    },
    {
      id: "option-d",
      label: "D. 48m/s2",
      index: 4
    }
  ]

const SelectedQuiz = () => {
  return (
    <div className='flex flex-col flex-1 justify-center items-center h-screen bg-slate-800 pt-16 overflow-hidden gap-6'>
      <div className='flex flex-col w-4/5 h-auto border-2 p-7 gap-7'>
        <h1 className='text-4xl text-white font-bold'>REE 2023</h1>
        <p className='text-xl text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat fugiat laudantium pariatur molestiae deleniti, magnam aliquid eius quidem ipsa enim debitis aut illum vel nulla maxime, labore deserunt iste.
        </p>

        <form method='PUT' className='flex flex-col w-full h-auto'>
          {
            data.map((element: {[key: string]: any}) => {
              return <div className='flex flex-row justify-start items-center p-6 gap-10' key={element.index}>
                      <input type='radio' id={element.id} value={element.id} name='quiz'/>
                      <label htmlFor={element.id} className='text-2xl text-white hover:cursor-pointer'>
                        {element.label}
                      </label>
                    </div>
            })
          }
        </form>

        <div className='flex flex-row justify-center items-center gap-5'>
          <button>PREV</button>
          <button>NEXT</button>
        </div>
      </div>
    </div>
  )
}

export default SelectedQuiz
