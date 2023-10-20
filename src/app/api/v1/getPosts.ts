import React from 'react'
import axios, { AxiosResponse } from 'axios'

const getPosts = async (): Promise<Post[]> => {
  let posts: Post[] = [];
  const url = 'http://127.0.0.1:3001/api/v1/posts';

  await axios.get(url).then((response: AxiosResponse<any, any>) => {
    console.log(response);
    const res = response.data.data;
    res.map((element: {[ket: string]: any}) => {
      posts.push(element.attributes);
    })
  }).catch((errors) => console.log(errors));

  return posts;
}

export default getPosts
