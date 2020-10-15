import React from "react";
import {connect} from "react-redux";
import {
    follow, followThunkCreator, getUsersTC, setCurrentPage,
    unFollow, unFollowThunkCreator, UsersType
} from "../../redux/user-reducer";
import {Users} from "./UserFunc";
import ToggleIsFetching from "../common/ToggleIsFetching";

import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/users-selectors";
import {AppRootStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    users: Array<UsersType>
    totalUsersCount: number
    followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
    getUsersTC: (currentPage: number, pageSize: number) => void
    follow: (userId: any) => void
    unFollow: (userId: any) => void
    followThunkCreator: (userID: number) => void
    unFollowThunkCreator: (userID: number) => void
}

type OwnPropsType = {
    pageTitle: string
    name: string
    status: any
}

type PropsType = OwnPropsType & MapDispatchToPropsType & MapStatePropsType


export class UsersContainer extends React.Component<PropsType, any> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: any) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <ToggleIsFetching/> : null}
            <Users pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   name={this.props.name}
                   users={this.props.users}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
                   status={this.props.status}
                   totalUsersCount={this.props.totalUsersCount}
                   unFollow={this.props.unFollow}
                   followingInProgress={this.props.followingInProgress}
                   followThunkCreator={this.props.followThunkCreator}
                   unFollowThunkCreator={this.props.unFollowThunkCreator}


            />
        </>

    }
}


let mapStateToProps = (state: AppRootStateType) => {//в нашем первом объекте мы берем данные из STATE, смысл этой функции замапить стейт на пропсы и превратить чать стейта в пропсы
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)

    }
}


export default compose<React.ComponentType<any>>(
    connect<MapStatePropsType, MapDispatchToPropsType, OwnPropsType, AppRootStateType>(
        mapStateToProps, {
        follow,
        unFollow,
        // setCurrentPage,
        followThunkCreator,
        unFollowThunkCreator,
        getUsersTC
    }),
    // withAut hRedirect
)(UsersContainer)