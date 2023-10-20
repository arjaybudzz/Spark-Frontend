'use server'

import axios, { AxiosResponse } from 'axios';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

const createPost = async (data: FormData): Promise<void> => {
  const url = "http://127.0.0.1:3001/api/v1/posts";

  await axios.post(url, {
    body: data.get("body")
  },{
    headers: {
        "Content-Type": "application/json",
        "Authorization": cookies().get("userToken")?.value
    }
  }).then((response: AxiosResponse<any, any>) => {
    revalidateTag('posts');
  }).catch(() => {
    throw new Error("failed to make post.")
  })
}

export default createPost
