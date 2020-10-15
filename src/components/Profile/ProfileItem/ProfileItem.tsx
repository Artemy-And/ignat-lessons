import React, {useState} from "react";
import classes from "./ProfileItem.module.css";
import ToggleIsFetching from "../../common/ToggleIsFetching";
import {ProfileStatusWithHook} from "../ProfileInfo/ProfileStatusWithHook";
import avka from "../../../assets/images/logo.jpeg"
import {ProfileDataFormReduxForm} from "../ProfileInfo/ProfileDataForm";
import {Button} from "@material-ui/core";
import {Field} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";


const ProfileItem = (props: any) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    if (!props.profile) {
        return <ToggleIsFetching/>
    }
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.getSaveInfoTC(e.target.files[0])
        }
    }
    console.log(props.isOwner)
    const onSubmit = (value: any) => {
        props.getSaveInfoTC(value).then(() => {
            setEditMode(false)
        })

    }
    return (
        <div className={classes.container}>
            <div>
                {/*не удалять*/}
                <img
                    className={classes.imgShip}
                    src="https://www.dnvgl.com/Images/Containerships_Excellence_1288x511_tcm8-159022.jpg"
                ></img>
            </div>
            <div className={classes.block}>
                <div className={classes.block_row}>
                    <div className={classes.block_column}>
                        <div className={classes.block_item}>
                            <img src={props.profile.photos.large || avka} className={classes.mainPhoto}/>
                            <br></br>
                            {props.isOwner &&
                            <label className={classes.myButton}>
                                <input id={'fileupload'} type={'file'} onChange={onMainPhotoSelected}/>
                                Edit photo
                            </label>
                            }
                        </div>
                    </div>

                    <div className={classes.block_list}>
                        <div className={classes.block_info}>
                            <ProfileStatusWithHook status={props.status}
                                                   getUpdateUserStatus={props.getUpdateUserStatus}/>
                            {editMode
                                ? <ProfileDataFormReduxForm
                                    onSubmit={onSubmit}
                                    initialValues={props.profile}
                                    // profile={props.profile}
                                />
                                : <ProfileData fullName={props.profile.fullName}
                                               lookingForAJobDescription={props.profile.lookingForAJobDescription}
                                               editMode={() => {
                                                   setEditMode(true)
                                               }}
                                               aboutMe={props.profile.aboutMe}
                                               isOwner={props.isOwner}/>}
                            <br></br>
                            <br></br>
                            <div>
                                <b>Contacts:</b>
                                <p>Facebook</p>{props.profile.contacts.facebook}
                                <p>Instagram</p>{props.profile.contacts.instagram}


                                {/*{Object.keys(props.profile.contacts).map(key => {*/}
                                {/*    return <Contact key={key} contactTitle={key}*/}
                                {/*                    contactValue={props.profile.contacts[key]}/>*/}
                                {/*})}*/}
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

const ProfileData = (props: ProfileDataType) => {
    return (
        <div className={classes.mainInfo}>
            {props.isOwner && <div>
                <button className={classes.myButton} onClick={props.editMode}>Edit</button>

            </div>}
            <div>
                <div>
                    <b>FullName</b>: {props.fullName}
                </div>
            </div>
            <br></br>
            <div>
                <b>My professional skills</b>: {props.lookingForAJobDescription}
            </div>
            <br></br>
            <div>
                <b>Status of searcing job</b>: {props.lookingForAJobDescription ? 'Yes' : "No"}
            </div>
            <br></br>
            <div>
                <b>About</b>: {props.aboutMe}
            </div>

        </div>
    )
}


export const Contact = (props: contactType) => {
    return <div className={classes.contact}><p>{props.contactTitle}:</p><p>{props.contactValue}</p></div>

}


type contactType = {
    contactTitle: string
    contactValue: string
}
type ProfileDataType = {
    fullName: string
    lookingForAJobDescription: string
    isOwner: boolean
    editMode: any
    aboutMe: any
}

export default ProfileItem;
