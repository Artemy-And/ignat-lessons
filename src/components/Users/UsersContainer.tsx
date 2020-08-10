import React from "react";
import {connect, ConnectedComponent} from "react-redux";
import {followActionCreator, setUsetAC, unFollowActionCreator, UserActionTypes} from "../../redux/user-reducer";
import {Users} from "./Users";
import {DialogsActionType} from "../../redux/dialogs-reducer";
//import { usersTypeAll } from "../../redux/user-reducer";



let mapStateToProps = (state:any) => {//в нашем первом объекте мы берем данные из STATE, смысл этой функции замапить стейт на пропсы и превратить чать стейта в пропсы
    return {

        users:state.usersPage.users
    }
}
// dispatch:(action: DialogsActionType) => void
let mapDispatchToProps=(dispatch:(action:UserActionTypes)=>void)=>{
    return{
        follow:(userId:any)=>{
            dispatch(followActionCreator(userId))
        },
        unFollow:(userId:any)=>{
            dispatch(unFollowActionCreator(userId))
        },
        setUsers:(users:any)=>{
            dispatch(setUsetAC(users))
        }
    }
}








export default connect(mapStateToProps,mapDispatchToProps) (Users);
