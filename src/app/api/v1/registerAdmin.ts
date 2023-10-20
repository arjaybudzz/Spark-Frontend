'use server'

import axios, { AxiosResponse } from 'axios';
import type { User } from '@/models/user';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

const registerAdmin = async (data: FormData): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/admins`;

    await axios.post(url, {
        first_name: data.get("firstName"),
        middle_name: data.get("middleName"),
        last_name: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
        password_confirmation: data.get("passwordConfirmation")
    }).then((response: AxiosResponse<any, any>) => {
        console.log(response);
        revalidateTag('admins');
        redirect("/admin");
    }).catch((errors) => console.log(errors))
}

export default registerAdmin;
