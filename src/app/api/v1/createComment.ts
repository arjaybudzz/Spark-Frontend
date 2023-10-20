'use server'

import axios, { AxiosResponse } from "axios"
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

const createComment = async (data: FormData): Promise<void> => {
  const url = `http://127.0.0.1:3001/api/v1/comments`;

  await axios.post(url, {
    user_name: data.get("userName"),
    body: data.get("body")
  }, {
    headers: {
        "Content-Type": "application/json",
        "Authorization": cookies().get("postToken")?.value
    }
  }).then((response: AxiosResponse<any, any>) => {
    revalidateTag("comments")
  }).catch((errors) => console.log(errors))

}

export default createComment
