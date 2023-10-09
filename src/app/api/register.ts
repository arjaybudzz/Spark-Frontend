import axios, { AxiosResponse } from 'axios';
import type { User } from '@/models/user';

const registerUser = async (data: User): Promise<void> => {
    const url = `https://spark-9bqv.onrender.com/api/v1/users`;

    await axios.post(url, {
        first_name: data.firstName,
        middle_name: data.middleName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
        password_confirmation: data.passwordConfirmation
    },{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("adminToken")}`
        }
    }).then((response: AxiosResponse<any, any>) => {
        console.log(response);
    }).catch((errors) => console.log(errors))
}

export default registerUser;
