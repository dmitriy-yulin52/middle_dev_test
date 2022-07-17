import axios, {AxiosResponse} from "axios";
import {IUser} from "../../redux/components/auth/auth-types";


const http = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true
});


export const AuthApi = {
    getUsers(): Promise<AxiosResponse<IUser[]>> {
        return http.get<IUser[]>('/users');
    }
}