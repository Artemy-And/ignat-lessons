import React from "react";
import classes from "./ProfileItem.module.css";

const ProfileItem = () => {
  return (
    <div>
      <div>
        <img
          className={classes.imgShip}
          src="https://www.dnvgl.com/Images/Containerships_Excellence_1288x511_tcm8-159022.jpg"
        ></img>
      </div>
      <div className={classes.avaDescription}>ava + desription</div>
    </div>
  );
};
export default ProfileItem;
