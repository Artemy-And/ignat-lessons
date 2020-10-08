import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getSaveInfoTC,
    getSavePhotoTC,
    getUpdateUserStatus,
    getUserProfile,
    getUserStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<any, any> {
    updateProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
      if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.updateProfile()
    }
    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
      if (this.props.match.params.userId != prevProps.match.params.userId){
          this.updateProfile()
      }

    }



    render() {
        console.log('profile container')
        //if (this.props.isAuth === false)return <Redirect to='/login'/>

        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     getUpdateUserStatus={this.props.getUpdateUserStatus}
                     isAuth={this.props.isAuth}
                     getSavePhotoTC={this.props.getSavePhotoTC}
                     getSaveInfoTC={this.props.getSaveInfoTC}
            />
        )
    }


}


let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
})


export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getUserStatus, getUpdateUserStatus,getSavePhotoTC,getSaveInfoTC}),
    withAuthRedirect,
)(ProfileContainer)