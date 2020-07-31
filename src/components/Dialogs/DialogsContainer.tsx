import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    dialogsTypeState, stateType,
} from "../../redux/state";
import {addMessageCreator, updateNEwMessageTextCreator, DialogsActionType} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";


import {connect, ConnectedComponent} from "react-redux";


export type dialogsDataType = {
    id: number;
    name: string;
};
export type dialogsMessagesDataType = {
    id: number;
    message: string;
};


// type dialogsAndMessagesType = {
//     store: any
//     // updateNewMessageText:any
//     // state: dialogsTypeState
//     // dispatch: (action: DialogsActionType) => void
//     // newMessageText:string
//
// };

// const DialogsContainer = () => {
//
//
//     return <StoreContext.Consumer>
//         {(store: Store) => {
//             let state = store.getState().dialogsPage
//
//             let addPost = () => {
//                 store.dispatch(addMessageCreator())
//             }
//
//             let onChangeMessage = (text: string) => {
//                 store.dispatch(updateNEwMessageTextCreator(text));
//             }
//             return <Dialogs updateNewMessageText={onChangeMessage}
//                             addMessageCreator={addPost}
//                             dialogsPage={state}
//             />
//         }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state:stateType) => {//в нашем первом объекте мы
    // берем данные из STATE, смысл этой функции замапить стейт на
    // пропсы и превратить чать стейта в пропсы
    return {
       dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:(action: DialogsActionType) => void) => {//а тут колбэки которые м ыбудем отправлять
    // в нашу презентационную компоненту
    return {
        updateNEwMessageTextCreator:(text: string)=>{
            dispatch(updateNEwMessageTextCreator(text));
        },
        addMessageCreator:()=>{
            dispatch(addMessageCreator())
        }
    }
}

class dialogsAndMessagesType {
}

const DialogsContainer:ConnectedComponent<any, any> = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

// props:DialogsAndMessageType


export default DialogsContainer;
