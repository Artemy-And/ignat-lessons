import React from "react";
import classes from "./../ProfileItem/ProfileItem.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import style from "../../common/FormsControls/FormControls.module.css";


export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = (props: ProfileDataFormType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <b>FullName</b>: <Field placeholder={'FullName'}
                                        name={'fullName'} component={Input}
                                        validate={[required]}
                                        />
            </div>
            <div>
                <b>Looking for JOB</b>:<Field placeholder={'lookingForAJob'}
                                                   name={'lookingForAJob'} component={Input}
                                                   validate={[required]}
                                                   type={'checkbox'}/>
            </div>
            <div>
                <b>My professional skills</b>:
                <Field placeholder={'My professional skills'} name={'lookingForAJobDescription'} component={Input} validate={[required]}/>
            </div>
            <div>
                <b>About</b>:
                <Field placeholder={'About'} name={'aboutMe'} component={Input} validate={[required]}/>
            </div>
            <div><b>Contacts:</b>{Object.keys(props.initialValues.contacts).map(key => {
                return <div key={key} className={classes.contact}>
                    <b>{key}:<Field placeholder={key} name={'contacts.'+ key} component={Input} /></b>
                </div>
            })}

            </div>

        </form>
    )
}
export const ProfileDataFormReduxForm = reduxForm<ProfileDataFormType>({form: 'profileDataForm'})(ProfileDataForm)


type ProfileDataFormType = {
    // lookingForAJobDescription: any
    // FullName:any
    // skills:any
    // About:any
    // contacts:any
    // profile:any
    error:any
    handleSubmit:any
    initialValues:any
}