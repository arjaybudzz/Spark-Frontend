import React from 'react'
import Image from 'next/image'
import loadingIcon from 'src/images/loading.png'

const Loading = () => {
  return (
    <div className='flex flex-col flex-1 h-screen justify-center items-center z-50 bg-black'>
      <Image src={loadingIcon} width={100} height={100} alt="loading icon" className='animate-spin'/>
      <h1 className='text-2xl text-white'>Please wait...</h1>
    </div>
  )
}

export default Loading
