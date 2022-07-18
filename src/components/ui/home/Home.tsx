import * as React from 'react';
import {useTypedSelector} from "../../../utils/hooks/useTypedSelector";
import {ContactsViewType} from "../../../redux/components/contacts-view/contacts-view-types";

type Props = {};

export const Home = (props: Props) => {

    const {view} = useTypedSelector(state=>state.contactsView)

    return (
      <>
          {view === ContactsViewType.TILE_VIEW
                        ? <div>TILE_VIEW</div>
                        : <div>TABLE_VIEW</div>
          }
      </>
    );
};