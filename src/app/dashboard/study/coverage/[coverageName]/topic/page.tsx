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
    <div className='flex flex-col w-screen h-screen justify-start items-center bg-homepage-background bg-cover p-16 gap-6'>
        <h1 className='text-white font-bold text-5xl self-start'>Topics</h1>
      <div className='flex flex-col w-4/5
       h-auto justify-center items-center p-4'>
        {
          topicArray.map((element: {[key: string]: any}) => {
            return <Topic coverageName={params.coverageName as string} majorFolder={"dashboard"} topicName={element.attributes.name} mode={"study/coverage"} key={element.id}/>
          })
        }
      </div>
    </div>
  )
}

export default TopicList
