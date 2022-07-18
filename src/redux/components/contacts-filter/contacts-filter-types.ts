



export enum TypeNames {
    SET_FILTER_VALUE = 'contacts-filter/SET_FILTER_VALUE',
    RESET_FILTER_VALUE = 'contacts-filter/RESET_FILTER_VALUE'
}

export type ContactsFilterType = {
    name: string,
    gender: string,
    nationality: string,
}

export const initialState:ContactsFilterType = {
    name: '',
    gender: '',
    nationality: '',
}

export type SetFilterValue = {
    type:TypeNames.SET_FILTER_VALUE,
    payload:ContactsFilterType
}
export type ResetFilterValue = {
    type:TypeNames.RESET_FILTER_VALUE,
}

export type ActionsType = SetFilterValue | ResetFilterValue

