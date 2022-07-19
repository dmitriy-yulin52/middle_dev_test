import axios, {AxiosResponse} from "axios";
import {ContactsType} from "../../redux/components/contacts/contacts-types";

const http = axios.create({
    baseURL: 'https://randomuser.me/api',
    withCredentials: true
});


export type ResponseType = {
    info: {
        seed: string,
        results: number,
        page: number,
        version: string
    },
    results: ContactsType[]
}

export const contactsApi = {
    getContacts(): Promise<AxiosResponse<ResponseType>> {
        return http.get(`/?result=50`)
    }
}