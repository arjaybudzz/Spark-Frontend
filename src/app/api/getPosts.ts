import React from 'react'
import axios, { AxiosResponse } from 'axios'

const getPosts = async (): Promise<void> => {
  const url = 'https://spark-9bqv.onrender.com/api/v1/posts';

  await axios.get(url).then((response: AxiosResponse<any, any>) => {
    console.log(response);
  }).catch((errors) => console.log(errors));
}

export default getPosts
