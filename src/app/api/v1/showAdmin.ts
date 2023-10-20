import axios, { AxiosResponse } from "axios";

const showAdmin = async (id: number): Promise<Partial<Admin>> => {
    const url = `http://127.0.0.1:3001/api/v1/admins/${id}`;
    let admin: Partial<Admin> = {
        firstName: "",
        middleName: "",
        lastName: "",
        email: ""
    }

    await axios.get(url).then((response: AxiosResponse<any, any>) => {
        console.log(response);
        admin = response.data.data;
    }).catch(() => {throw new Error("failed to fetch Admin.")});

    return admin;
}
