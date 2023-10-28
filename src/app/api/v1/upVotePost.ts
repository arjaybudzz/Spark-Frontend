'use server'

import axios, { AxiosResponse } from 'axios'

const upVotePost = async(): Promise<void> => {
    const url = "http://127.0.0.1:3001/api/v1/post_up_votes";
    await axios.post(url).then((response: AxiosResponse<any, any>) => {
        console.log(response)
    }).catch((errors) => console.log(errors))
}

export default upVotePost
