import React from "react";
import styles from './FormControls.module.css'
import {WrappedFieldProps} from "redux-form";

export const Textarea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>
                <textarea{...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}


        </div>
    )
}

// type InputType = {
//     meta: {
//         touched: boolean
//         error: string 
//     }
// }
// type FormControlType=(params:InputType)=>void


export const Input:React.FC<WrappedFieldProps> = ({input, meta: {touched, error}, ...props}: any) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>
                <input{...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}


        </div>
    )
}