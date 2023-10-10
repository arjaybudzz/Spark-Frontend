'use client'

import React, { useEffect, useState } from 'react'
import Topic from '@/components/topic/Topic'
import CreateTopic from '@/components/createTopic/CreateTopic';
import axios, { AxiosResponse } from 'axios';
import { useParams } from 'next/navigation';

const TopicList = () => {
    const params = useParams();

    const [isTopicButtonClicked, setIsTopicButtonClicked] = useState<boolean>(false);
    const [topicArray, setTopicArray] = useState<object[]>([]);

    const updateIsTopicButtonClicked = () => {
        setIsTopicButtonClicked(!isTopicButtonClicked);
    }

    const getTopics = async(): Promise<void> => {
      const url = `https://spark-9bqv.onrender.com/api/v1/subjects/${localStorage.getItem("subjectId")}`;

      await axios.get(url).then((response: AxiosResponse<any, any>) => {
        console.log(response.data.included);
        const result = response.data.included;
        result.map((element: {[key: string]: any}) => {
          if (element.type === 'topic') {
            setTopicArray(topicArray => [...topicArray, element])
          }
        })

      }).catch((errors) => console.log(errors))
    }

    useEffect(() => {
      getTopics();
    }, [])

    console.log(topicArray);

  return (
    <div className='flex flex-col w-screen h-screen justify-start items-center bg-homepage-background bg-cover p-6 gap-6'>
        <h1 className='text-white font-bold text-5xl self-start'>Topics</h1>
      <div className='flex flex-col w-4/5
       h-auto justify-center items-center p-4'>
        {
          topicArray.map((element: {[key: string]: any}) => {
            return <Topic coverageName={params.coverageName as string} majorFolder={"admin"} topicName={element.attributes.name} mode={"coverage"} key={element.id}/>
          })
        }

        {isTopicButtonClicked && <CreateTopic />}
      </div>
        <button
            className='w-[200px] h-11 bg-blue-500 border-none text-xl hover:shadow-2xl hover:shadow-black hover:bg-blue-300 active:bg-blue-500 disabled:bg-gray-500 disabled:shadow-none'
            onClick={updateIsTopicButtonClicked}>
            {isTopicButtonClicked? "Cancel" : "Add a Topic"}
        </button>
    </div>
  )
}

export default TopicList
