import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import classes from "./Dialogs.module.css";

type FormDataType = {
    newMessageText: string

}

const maxLength50 = maxLengthCreator(100)
const MessagesForm:React.FC<InjectedFormProps<FormDataType>> = (props: any) => {

    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'message'}
                    name={'newMessageText'}
                    component={Textarea}
                    validate={[required, maxLength50]}
                >
                </Field>


                <button className={classes.myButton}>Add post</button>
            </div>
    </form>
   )
}

export const MessagesReduxForm = reduxForm<FormDataType>({form:'dialogAddMessageForm'})(MessagesForm)

