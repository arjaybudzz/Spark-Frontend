'use server'

import axios, { AxiosResponse } from 'axios';
import { cookies } from 'next/headers'

const loginUser = async (data: FormData): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/user_tokens?user[email]=${data.get("email")}&user[password]=${data.get("passwordInput")}`;

    await axios.post(url).then((response: AxiosResponse<any, any>) => {
        cookies().set("userToken", response.data.user_token);
    }).catch(() => {
        throw new Error("failed to login");
    })
}

export default loginUser
