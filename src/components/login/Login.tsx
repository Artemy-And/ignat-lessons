import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import {AppRootStateType} from "../../redux/redux-store";
import style from '../common/FormsControls/FormControls.module.css'



type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            {error &&  <div className={style.formSummaryError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


export const Login = (props: any) => {
    const isAuth = useSelector<AppRootStateType, any>((state) => state.auth.isAuth)
    const dispatch = useDispatch();

    const onSubmit = (formData: FormDataType) => {

        dispatch(loginTC(formData.email, formData.password, formData.rememberMe))
    }
    if (isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}





