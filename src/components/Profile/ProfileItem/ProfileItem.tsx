import React, {useState} from "react";
import classes from "./ProfileItem.module.css";
import ToggleIsFetching from "../../common/ToggleIsFetching";
import {ProfileStatusWithHook} from "../ProfileInfo/ProfileStatusWithHook";
import avka from "../../../assets/images/logo.jpeg"
import {ProfileDataFormReduxForm} from "../ProfileInfo/ProfileDataForm";

const ProfileItem = (props: any) => {
    let [editMode, setEditMode] = useState<boolean>(false)

    // const todoList = {
    //     backgroundImage: `url(${ava})`
    // }

    if (!props.profile) {
        return <ToggleIsFetching/>
    }
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.getSaveInfoTC(e.target.files[0])
        }
    }
    console.log(props.isOwner)
    const onSubmit =  (value:any) => {
    props.getSaveInfoTC(value).then(()=>{
        setEditMode(false)
    })

    }
    return (
        <div>
            <div>
                {/*не удалять*/}
                {/*<img*/}
                {/*  className={classes.imgShip}*/}
                {/*  src="https://www.dnvgl.com/Images/Containerships_Excellence_1288x511_tcm8-159022.jpg"*/}
                {/*></img>*/}


            </div>

            <div className={classes.avaDescription}>

                <img src={props.profile.photos.large || avka} className={classes.mainPhoto}/>

                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                <ProfileStatusWithHook status={props.status} getUpdateUserStatus={props.getUpdateUserStatus}/>
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
                <div><b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}

                </div>

            </div>
        </div>
    );
};

const ProfileData = (props: ProfileDataType) => {
    return (
        <div>
            {props.isOwner && <div>
                <button onClick={props.editMode}>edit</button>
            </div>}
            <div>
                <div>
                    <b>FullName</b>: {props.fullName}
                </div>
            </div>
            <div>
                <b>статус поиска работы</b>: {props.lookingForAJobDescription ? 'Yes' : "No"}
            </div>
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
    aboutMe:any
}

export default ProfileItem;
