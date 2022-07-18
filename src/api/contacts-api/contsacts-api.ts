import axios, {AxiosResponse} from "axios";
import {ContactsType} from "../../redux/components/Contacts/contacts-types";

const http = axios.create({
    baseURL: 'https://randomuser.me/api',
    withCredentials: false
});


type ResponseType = {
    info: {
        seed: string,
        results: number,
        page: number,
        version: string
    },
    results: ContactsType[]
}

export const contactsApi = {
    getContacts(amount: number, page: number): Promise<AxiosResponse<ResponseType>> {
        return http.get(`/?result=${amount}&page${page}`)
    }
}