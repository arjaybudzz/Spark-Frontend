import axios, { AxiosResponse } from 'axios';
import type { User } from '@/models/user';

const register = async (data: User, userType: "admins" | "users"): Promise<void> => {
    const url = `http://127.0.0.1:3001/api/v1/${userType}`;

    await axios.post(url, {
        first_name: data.firstName,
        middle_name: data.middleName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
        password_confirmation: data.passwordConfirmation
    }).then((response: AxiosResponse<any, any>) => {
        console.log(response);
    }).catch((errors) => console.log(errors))
}

export default register;
