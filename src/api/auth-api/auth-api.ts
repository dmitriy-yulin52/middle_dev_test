import axios, {AxiosResponse} from "axios";
import {IUser} from "../../redux/components/auth/auth-types";


const http = axios.create({
    baseURL: 'http://localhost:3003',
    withCredentials: true
});


export const authApi = {
    getUsers(): Promise<AxiosResponse<IUser[]>> {
        return http.get<IUser[]>('/users');
    }
}