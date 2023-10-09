import React from 'react'
import axios, { AxiosResponse } from 'axios'

export const getTopics = async (): Promise<void> => {
    const url = 'https://spark-9bqv.onrender.com/api/v1/topics';
    await axios.get(url)
    .then((response: AxiosResponse<any, any>) => console.log(response))
    .catch((errors) => console.log(errors));
}
