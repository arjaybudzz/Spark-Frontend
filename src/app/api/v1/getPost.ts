import axios, { AxiosResponse } from 'axios'

const getPost = async (id: string | number): Promise<Post> => {
  let post: Post = {
    body: "",
    upVote: 0,
    downVote: 0
  };

  const url = `http://127.0.0.1:3001/api/v1/posts/${id}`;

  await axios.get(url).then((response: AxiosResponse<any, any>) => {
    console.log(response);
    post = response.data.data.attributes;
  }).catch(() => {throw new Error("failed to get Posts")});

  return post;
}

export default getPost
