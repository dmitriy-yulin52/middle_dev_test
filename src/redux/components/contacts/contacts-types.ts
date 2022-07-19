export enum NamesType {
    SET_IS_LOADING = 'contacts/SET_IS_LOADING',
    SET_IS_ERROR = 'contacts/SET_IS_ERROR',
    FETCH_CONTACTS = 'contacts/FETCH_CONTACTS',
    SET_CONTACTS = 'contacts/SET_CONTACTS',
    SET_MESSAGE_ERROR = 'contacts/SET_MESSAGE_ERROR',
    SET_SORT_TYPE = 'contacts/SET_SORT_TYPE',
}


/** contacts*/
export type ContactsType = {
    cell: string
    dob: DobType
    email: string
    gender: string
    id: IdType
    location: LocationType
    login: LoginType
    name: NameType
    nat: string
    phone: string
    picture: PictureType
    registered: RegisteredType
}

export type DobType = {
    date: string, age: number
}
type IdType = {
    name: string, value: null
}

type CoordinatesType = {
    latitude: string,
    longitude: string
}
type StreetType = {
    number: number,
    name: string
}
type TimezoneType = {
    offset: string,
    description: string
}
export type LocationType = {
    city: string
    coordinates: CoordinatesType
    country: string
    postcode: number
    state: string
    street: StreetType
    timezone: TimezoneType
}

type LoginType = {
    md5: string
    password: string
    salt: string
    sha1: string
    sha256: string
    username: string
    uuid: string
}

type NameType = {
    title: string,
    first: string,
    last: string
}

type PictureType = {
    large: string
    medium: string
    thumbnail: string
}
type RegisteredType = {
    date: string,
    age: number
}

export enum ContactsSortType {
  BY_NAME_ASC = "BY_NAME_ASC",
  BY_NAME_DESC = "BY_NAME_DESC",
  NOT_SORTED = "NOT_SORTED",
}


/** state*/
export const initialState = {
    items: [],
    isLoading: false,
    isError: false,
    messageError: null,
    sortType:ContactsSortType.NOT_SORTED
}

export type InitialStateType = {
    items: ContactsType[],
    isLoading: boolean,
    isError: boolean,
    messageError: null | string
    sortType:ContactsSortType
}


/** actions*/
export type SetIsLoading = {
    type: NamesType.SET_IS_LOADING,
    payload: boolean
}
export type SetIsError = {
    type: NamesType.SET_IS_ERROR,
    payload: boolean
}
export type SetContacts = {
    type: NamesType.SET_CONTACTS,
    payload: ContactsType[]
}
export type FetchContacts = {
    type: NamesType.FETCH_CONTACTS,
}
export type SetMessageError = {
    type: NamesType.SET_MESSAGE_ERROR,
    payload: string | null
}
export type SetSortType = {
    type: NamesType.SET_SORT_TYPE,
    payload: ContactsSortType
}

export type ActionsType =
    | SetIsLoading
    | SetIsError
    | SetContacts
    | FetchContacts
    | SetMessageError
    | SetSortType








