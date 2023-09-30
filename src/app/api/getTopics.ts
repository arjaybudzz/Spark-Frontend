import React from 'react'
import axios, { AxiosResponse } from 'axios'

export const getTopics = async (): Promise<void> => {
    const url = 'http://127.0.0.1:3001/api/v1/topics';
    await axios.get(url)
    .then((response: AxiosResponse<any, any>) => console.log(response))
    .catch((errors) => console.log(errors));
}
