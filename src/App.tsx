import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, withRouter} from "react-router-dom";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import ToggleIsFetching from "./components/common/ToggleIsFetching";
import store from "./redux/redux-store";
import {withSuspence} from "./hoc/withSuspence";

// Этот компонент загружается динамически
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";


class App extends React.Component<any, any> {
//необходимо задиспачить тут ошибку которую нужно создать в app reducer 47 минута
    catchAllUnhandledErrors = (reason: any, promise: any) => {
        alert('Some error');
    }

    componentDidMount() {
        this.props.initializeAppTC()
        // @ts-ignore
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        // @ts-ignore
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <ToggleIsFetching/>
        }
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route
                        exact
                        path="/dialogs"
                        //вариант загрузки DialogsComponent с HOC withSuspence
                        render={withSuspence(DialogsContainer)}
                    />

                    <Route
                        path='/profile/:userId?'
                        render={() =>
                            //вариант загрузки DialogsComponent без HOC withSuspence
                            <React.Suspense fallback={<ToggleIsFetching/>}>
                                <div>
                                    <ProfileContainer/>
                                </div>
                            </React.Suspense>
                        }
                    />
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>

                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>


                </div>
            </div>


        );
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized
})

export let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC}))(App);

export const SocialTSApp = (props: any) => {
    return (<HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>)
}

