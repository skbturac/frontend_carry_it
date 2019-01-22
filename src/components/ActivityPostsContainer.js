import React, { Component, Fragment } from "react";
import Requests from "./Requests";
import { Grid } from "semantic-ui-react";

var faker = require("faker");

class ActivityPostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
  }

  createService = event => {
    console.log(event.id);
    fetch("http://localhost:4000/api/v1/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        service: {
          status: "Picked-Up",
          price: faker.fake("{{random.number(50)}}"),
          destination_address: event.receiver.home_address,
          package_id: event.id
        }
      })
    })
      .then(response => response.json())
      .then(servicesData => {
        this.setState({ services: servicesData });
      });
  };


  renderActivityPosts = () => {
    return this.props.requests.map(serviceObj => (
      <Requests
        createService={this.createService}
        serviceObj={serviceObj}
        key={serviceObj.id}
        handleAccept = {this.props.handleAccept}
      />
    ));
  };

  render() {
    return (
      <Fragment>
        <Grid className="activity-requests-container" columns={4}>
          {this.renderActivityPosts()}
        </Grid>
      </Fragment>
    );
  }
}

export default ActivityPostsContainer;

// updatePost = obj => {
  //   fetch("http://localhost:4000/api/v1/packages", {
    //     method: "PATCH",
    //     headers: {
      //       Authorization: `Bearer ${localStorage.getItem("token")}`
      //     },
      //     body: JSON.stringify({
        //       user: {
          //         weight: obj.weight,
          //         height: obj.height,
          //         length: obj.length,
          //         description: obj.description,
          //         delivery_date: obj.delivery_date,
          //         image: obj.image,
          //         receiver_id: obj.receiver_id,
          //         status: false
          //       }
          //     })
          //   })
          //   .then(response => response.json())
          //   .then(json => {
            //     this.props.handleUpdate(json)
            //   })
            // }
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
