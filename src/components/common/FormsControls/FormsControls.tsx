import React from "react";
import styles from './FormControls.module.css'

export const Textarea = ({input,meta,...props}:any)=>{
    const hasError =meta.touched && meta.error
    return(
        <div className={styles.formControl + " " +(hasError ?styles.error:" ") }>
            <div>
                <textarea{...input} {...props}/>
            </div>
            { hasError &&   <span>{meta.error}</span>}


        </div>
    )
}

export const Input = ({input,meta:{touched,error},...props}:any)=>{
    const hasError =touched && error
    return(
        <div className={styles.formControl + " " +(hasError ?styles.error:" ") }>
            <div>
                <input{...input} {...props} />
            </div>
            { hasError &&   <span>{error}</span>}


        </div>
    )
}