import React, { Component } from "react";
import { Header, Image } from "semantic-ui-react";

class ProfileImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("ProfileImage Props Are ---", this.props);
    return (
      <div className="profile-image">
        <Header as="h2">
          <Image
            as="a"
            size="massive"
            circular
            src={this.props.userInfo.avatar}
          />
          {this.props.userInfo.first_name} {this.props.userInfo.last_name}
        </Header>
      </div>
    );
  }
}

export default ProfileImage;
// <>
// userAtt.username
// </>
// {props.sushidata.map(s => (
//   <Sushi key={s.id} sushi={s} handleEatSushi={props.handleEatSushi}/>
// ))}

// <Image
// circular
// src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
// />
// Patrick Maclean
//
