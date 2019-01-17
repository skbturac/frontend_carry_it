import React, { Component } from "react";
import ActivityPosts from './ActivityPosts'
import { Grid } from 'semantic-ui-react'

class ActivityPostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesData: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/v1/packages", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(serviceData => {
        // debugger
        console.log("Before fetch --", serviceData);
        this.setState({ servicesData: serviceData });
        console.log("After fetch --", serviceData);
      });
  }

  renderActivityPosts = () => {

  }

  render() {
    console.log("Before fetch --", this.servicesData);

    return (
      <>
        <Grid className="activity-posts-container" columns={6}>
          {this.renderActivityPosts()}
        </Grid>
      </>
    );
  }
}

export default ActivityPostsContainer;

// import { Button, Dimmer, Header, Image, Reveal } from 'semantic-ui-react'
// <>
// <Reveal animated='move up'>
// <Reveal.Content visible>
// <Dimmer.Dimmable
// as={Image}
// dimmed={active}
// dimmer={{ active, content }}
// onMouseEnter={this.handleShow}
// onMouseLeave={this.handleHide}
// size="medium"
// src="https://pamco-imaging.com/wp-content/uploads/2017/12/parcel-500-660-500x600.jpg"
// />
// <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
// </Reveal.Content>
// <Reveal.Content hidden>
// <Image src='https://react.semantic-ui.com/images/avatar/large/justen.jpg' size='small' />
// </Reveal.Content>
// </Reveal>
// </>
