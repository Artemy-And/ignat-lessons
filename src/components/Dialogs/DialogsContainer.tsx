import React, {ChangeEvent} from "react";
import {stateType} from "../../redux/state";
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




export default DialogsContainer;
