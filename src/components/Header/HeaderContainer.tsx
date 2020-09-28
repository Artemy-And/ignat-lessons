import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, loginOutTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


type PropsType = {
    setUserData: (data: any) => void
    getAuthUserData:any
}

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuthUserData()
        // userAPI.authUsers().then((data: any) => {
        //     if (data.resultCode === 0) {
        //         let {id, email, login} = data.data
        //         this.props.setUserData({id, email, login})
        //     }
        // });
    }

    render() {

        return (
            <Header {...this.props}/>
        );
    }
};
const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {getAuthUserData,loginOutTC})(HeaderContainer);
