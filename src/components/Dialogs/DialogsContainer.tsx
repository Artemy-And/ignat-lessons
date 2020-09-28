// import React from "react";
// import {addMessageCreator, updateNEwMessageTextCreator, DialogsActionType} from "../../redux/dialogs-reducer"
// import Dialogs from "./Dialogs";
// import {connect, ConnectedComponent} from "react-redux";
// import {Redirect} from "react-router";
//
//
// export type dialogsDataType = {
//     id: number;
//     name: string;
// };
// export type dialogsMessagesDataType = {
//     id: number;
//     message: string;
// };
//
// class DialogsContainer extends React.Component<any, any> {
//     componentDidMount() {
//     }
//
//     render() {
//         if (this.props.isAuth == false)return <Redirect to='/login'/>
//         return <Dialogs isAuth={this.props.isAuth}
//                         addMessageCreator={this.props.addMessageCreator}
//                         dialogsPage={this.props.dialogsPage}
//                         updateNewMessageText={this.props.updateNewMessageText}
//                         updateNEwMessageTextCreator={this.props.updateNEwMessageTextCreator} />
//     }
// }
//
// let mapDispatchToProps = (dispatch:(action: DialogsActionType) => void) => {//а тут колбэки которые м ыбудем отправлять
//     // в нашу презентационную компоненту
//     return {
//         updateNEwMessageTextCreator:(text: string)=>{
//             dispatch(updateNEwMessageTextCreator(text));
//         },
//         addMessageCreator:()=>{
//             dispatch(addMessageCreator())
//         }
//     }
// }
//
//
// let mapStateToProps = (state:any) => {//в нашем первом объекте мы
//     // берем данные из STATE, смысл этой функции замапить стейт на
//     // пропсы и превратить чать стейта в пропсы
//     return {
//         dialogsPage: state.dialogsPage,
//         isAuth: state.auth.isAuth
//     }
// }
//
//
// export default connect(mapStateToProps,mapDispatchToProps)(Dialogs);
//
//


/////старая версия******************//////////
import React from "react";
import {addMessageCreator, DialogsActionType} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";
import {connect, ConnectedComponent} from "react-redux";
import {Redirect} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type dialogsDataType = {
    id: number;
    name: string;
};
export type dialogsMessagesDataType = {
    id: number;
    message: string;
};

let mapStateToProps = (state: any) => {//в нашем первом объекте мы
    // берем данные из STATE, смысл этой функции замапить стейт на
    // пропсы и превратить чать стейта в пропсы
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapStateToPropsForRedirect = (state: any) => {//в нашем первом объекте мы
    // берем данные из STATE, смысл этой функции замапить стейт на
    // пропсы и превратить чать стейта в пропсы
    return {
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: (action: DialogsActionType) => void) => {//а тут колбэки которые м ыбудем отправлять
    // в нашу презентационную компоненту
    return {
        // updateNEwMessageTextCreator: (text: string) => {
        //     dispatch(updateNEwMessageTextCreator(text));
        // },
        addMessageCreator: (newMessageText:string) => {
            dispatch(addMessageCreator(newMessageText))
        }
    }
}

// let AuthRedirectComponent:any = withAuthRedirect(Dialogs)
// AuthRedirectComponent=connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

// const DialogsContainer:ConnectedComponent<any, any> = (AuthRedirectComponent);


//
// export default DialogsContainer;


export default compose<React.ComponentType>(

    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,

)(Dialogs);
