import Link from 'next/link'
import React from 'react'

const SpecificTopic = () => {
  return (
    <div className='flex flex-col flex-1 justify-start items-center h-screen bg-slate-800 pt-16 overflow-hidden overflow-y-scroll gap-6'>
      <div className='bg-blue-900 h-16 flex fixed top-15 left-0 right-0 justify-center items-center'>
        <h1 className='text-4xl text-white font-bold'>
          LINEAR EQUATIONS
        </h1>
      </div>
      <div className='pt-32 px-5 indent-10 text-justify'>
        <p className='text-xl text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias est atque laborum expedita. Sequi minima explicabo qui officia alias modi molestias sit quidem, vero fugit esse doloribus ratione odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias est atque laborum expedita. Sequi minima explicabo qui officia alias modi molestias sit quidem, vero fugit esse doloribus ratione odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias est atque laborum expedita. Sequi minima explicabo qui officia alias modi molestias sit quidem, vero fugit esse doloribus ratione odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias est atque laborum expedita. Sequi minima explicabo qui officia alias modi molestias sit quidem, vero fugit esse doloribus ratione odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias est atque laborum expedita. Sequi minima explicabo qui officia alias modi molestias sit quidem, vero fugit esse doloribus ratione odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias est atque laborum expedita. Sequi minima explicabo qui officia alias modi molestias sit quidem, vero fugit esse doloribus ratione odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias est atque laborum expedita. Sequi minima explicabo qui officia alias modi molestias sit quidem, vero fugit esse doloribus ratione odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias est atque laborum expedita. Sequi minima explicabo qui officia alias modi molestias sit quidem, vero fugit esse doloribus ratione odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias est atque laborum expedita. Sequi minima explicabo qui officia alias modi molestias sit quidem, vero fugit esse doloribus ratione odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias est atque laborum expedita. Sequi minima explicabo qui officia alias modi molestias sit quidem, vero fugit esse doloribus ratione odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias est atque laborum expedita. Sequi minima explicabo qui officia alias modi molestias sit quidem, vero fugit esse doloribus ratione odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias est atque laborum expedita. Sequi minima explicabo qui officia alias modi molestias sit quidem, vero fugit esse doloribus ratione odio?
        </p>
      </div>

      <p className='text-white text-2xl mb-7'>
        Ready for a quiz? Click <Link href="/dashboard/study/subject/1/topic/1/quiz" className='text-blue-500'>here</Link>!
      </p>
    </div>
  )
}

export default SpecificTopic
