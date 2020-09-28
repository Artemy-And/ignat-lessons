import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUpdateUserStatus, getUserProfile, getUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        // if (!userId){
        //     this.props.history.push('/login')
        // }
        this.props.getUserProfile(userId)
        // setTimeout(()=>{
            this.props.getUserStatus(userId)
        // }, 2000)

    }
shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        return nextProps != this.props || nextState!= this.state
}

    render() {
        console.log('profile container')
        //if (this.props.isAuth === false)return <Redirect to='/login'/>

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} getUpdateUserStatus={this.props.getUpdateUserStatus} isAuth={this.props.isAuth}/>
        )
    }


}


let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId:state.userId
})


export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {getUserProfile,getUserStatus,getUpdateUserStatus}),
    withAuthRedirect,
)(ProfileContainer)