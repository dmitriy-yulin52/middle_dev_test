export enum TypeNames {
    CHANGE_VIEW_TYPE = 'contacts-view/CHANGE_VIEW_TYPE'
}

export enum ContactsViewType {
    TABLE_VIEW = "TABLE_VIEW",
    TILE_VIEW = "TILE_VIEW",
}

export type initialStateType = {
    readonly view: ContactsViewType
}

export const initialState: initialStateType = {
    view: ContactsViewType.TABLE_VIEW
}


export type ChangeViewType = {
    type: TypeNames.CHANGE_VIEW_TYPE,
    payload: ContactsViewType.TABLE_VIEW | ContactsViewType.TILE_VIEW
}

export type ActionsType = |
    ChangeViewType
