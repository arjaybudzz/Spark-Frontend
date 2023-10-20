'use server'

import axios, { AxiosResponse } from 'axios';
import { cookies } from 'next/headers'
import { revalidateTag } from 'next/cache';

const loginAdmin = async (data: FormData): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/tokens?admin[email]=${data.get("email")}&admin[password]=${data.get("passwordInput")}`;

    await axios.post(url).then((response: AxiosResponse<any, any>) => {
        cookies().set("adminToken", response.data.token);
        revalidateTag("admins");
    }).catch((errors) => {
        console.log(errors)
    })
}

export default loginAdmin
