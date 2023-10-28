'use server'

import axios, { AxiosResponse } from 'axios';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers'

const registerUser = async (data: FormData): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/users`;

    await axios.post(url, {
        first_name: data.get("firstName"),
        middle_name: data.get("middleName"),
        last_name: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
        password_confirmation: data.get("passwordConfirmation")
    }).then((response: AxiosResponse<any, any>) => {
        revalidateTag('users');
    }).catch((errors) => console.log(errors))
}

export default registerUser;
