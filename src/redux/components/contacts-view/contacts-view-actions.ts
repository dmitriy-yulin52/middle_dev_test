import {ChangeViewType, ContactsViewType, TypeNames} from "./contacts-view-types";


export const ContactsViewActions = {
    changeViewType: (view: ContactsViewType): ChangeViewType => ({
        type: TypeNames.CHANGE_VIEW_TYPE,
        payload: view
    })
}