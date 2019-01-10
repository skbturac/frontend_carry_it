import React, { Component } from "react";
import ProfileImage from "../components/ProfileImage";
import ProfileDescription from "../components/ProfileDescription";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <ProfileImage />
        <ProfileDescription/>
      </div>
    );
  }
}

export default Profile;
