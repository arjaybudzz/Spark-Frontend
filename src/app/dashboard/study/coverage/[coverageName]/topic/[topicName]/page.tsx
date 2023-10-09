'use client';

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios, { AxiosResponse } from 'axios';
import SelectedTopic from '@/components/selectedTopic/SelectedTopic';
import { useParams } from 'next/navigation';

const SpecificTopic = () => {
  const params = useParams();

  const [topicName, setTopicName] = useState<string>("");
  const [topicDiscussion, setTopicDiscussion] = useState<string>("");

  const getTopic = async(): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/topics/${localStorage.getItem("topicId")}`;

    await axios.get(url)
    .then((response: AxiosResponse<any, any>) => {
      console.log(response.data.data.attributes);
      setTopicName(response.data.data.attributes.name);
      setTopicDiscussion(response.data.data.attributes.discussion);
    }).catch((errors) => console.log(errors))
  }

  useEffect(() => {
    getTopic();
  }, [])

  return (
    <SelectedTopic majorFolder={"dashboard/study"} topicName={topicName} topicDiscussion={topicDiscussion} coverageName={params.coverageName}/>
  )
}

export default SpecificTopic
