import React from "react";
import classes from "./ProfileItem.module.css";
import ToggleIsFetching from "../../common/ToggleIsFetching";
// import ProfileStatus from "../ProfileInfo/ProfileStatus";
import {getUpdateUserStatus} from "../../../redux/profile-reducer";
import {ProfileStatusWithHook} from "../ProfileInfo/ProfileStatusWithHook";

const ProfileItem = (props:any) => {

    if (!props.profile){
        return <ToggleIsFetching/>
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
          <div>FullName: {props.profile.fullName}</div>
          <img src={props.profile.photos.large}/>
          <ProfileStatusWithHook status={props.status} getUpdateUserStatus={props.getUpdateUserStatus}/>
          <div>
          <span>Contacts: {props.profile.contacts.facebook}</span>
          <span>Contacts: {props.profile.contacts.github}</span>
          </div>
          <div>
              <p>статус поиска работы: {props.profile.lookingForAJobDescription}</p>
          </div>

          ava + desription</div>
    </div>
  );
};
export default ProfileItem;
