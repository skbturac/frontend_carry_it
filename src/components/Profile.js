import React, { Component } from "react";
import ProfileImage from "../components/ProfileImage";
import ProfileDescription from "../components/ProfileDescription";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  renderUserDetails = () => {
    return (
      <div className="profile-container">
        <ProfileImage
          userInfo={this.props.userInfo.user}
          handleDisplay={this.props.handleDisplay}
        />
        <ProfileDescription
          userInfo={this.props.userInfo.user}
          handleDisplay={this.props.handleDisplay}
          handleEdit={this.props.handleEdit}
        />
      </div>
    );
  };

  render() {
    // debugger
    return this.props.userInfo.user ? this.renderUserDetails() : null;
  }
}

export default Profile;

// {this.props.userInfo.user.map(userAtt => (
//   <ProfileImage
//   userInfo={userAtt}
//   handleDisplay={this.props.handleDisplay}
//   />
//   <ProfileDescription
//   userInfo={userAtt}
//   handleDisplay={this.props.handleDisplay}
//   />
// ))}
