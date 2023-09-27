import React from 'react'
import type { LogInData } from '@/models/loginData'
import axios, { AxiosResponse } from 'axios'

export const loginUser = async (data: LogInData): Promise<void> => {
  const url = `http://127.0.0.1:3001/api/v1/tokens?admin[email]=${data.email}&admin[password]=${data.password}`;

  await axios.post(url).then((response: AxiosResponse<any, any>) => {
    console.log(response);
  }).catch((errors) => console.log(errors))
}
