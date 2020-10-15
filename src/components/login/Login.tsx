import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import {AppRootStateType} from "../../redux/redux-store";




const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = (props: LoginFormDataType) => {

    console.log(props.captchaUrl)
    return (
        <form onSubmit={props.handleSubmit}>
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
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <div>
                <Field placeholder={'symbols from image'} name={'captcha'} validate={[required]}
                       component={Input}/> remember me
            </div>}


            {/*{props.error && <div className={style.formSummaryError}>*/}
            {/*    {props.error}*/}
            {/*</div>}*/}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType,LoginFormOwnProps>({form: 'login'})(LoginForm)


export const Login = () => {
    const isAuth = useSelector<AppRootStateType, any>((state) => state.auth.isAuth)
    const captchaUrl = useSelector<AppRootStateType, any>(state => state.auth.captchaUrl)
    const dispatch = useDispatch();

    const onSubmit = (formData: FormDataType) => {

        dispatch(loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>

    )
}
type LoginFormDataType = {
    email?: string
    password?: string
    rememberMe?: boolean
    // captcha?:any
    handleSubmit?: () => void
    captchaUrl?: string | null
}
type LoginFormOwnProps = {
    captchaUrl: string | null
}
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}



