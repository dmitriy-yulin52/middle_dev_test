

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

type DobType = {
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
type LocationType = {
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

