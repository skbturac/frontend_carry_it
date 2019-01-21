import React, { Component, Fragment } from "react";
import Requests from "./Requests";
import { Grid } from "semantic-ui-react";

var faker = require('faker');

class ActivityPostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      users: [],
      services: []
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
      .then(requestsData => {
        // console.log("Before fetch --", requestsData);
        this.setState({ requests: requestsData });
        // console.log("After fetch --", requestsData);
      });
    fetch("http://localhost:4000/api/v1/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(usersData => {
        // console.log("Before fetch --", usersData);
        this.setState({ users: usersData });
        // console.log("After fetch --", usersData);
      });
  }

  createService = (event) => {
    console.log(event.id)
    fetch("http://localhost:4000/api/v1/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        service: {
          status: "Incomplete",
          price: faker.fake("{{random.number(50)}}"),
          destination_address: event.receiver.home_address,
          package_id: event.id
        }
      })
    })
      .then(response => response.json())
      .then(servicesData => {
        // console.log("Before fetch --", servicesData);
        this.setState({ services: servicesData });
        // console.log("!!!! After fetch --", servicesData);
      });
  };

  renderActivityPosts = () => {
    return this.state.requests.map(serviceObj => (
      <Requests createService={this.createService} serviceObj={serviceObj} key={serviceObj.id} />
    ));
  };

  render() {
    console.log(faker.fake("{{random.number(50)}}"));
    // console.log("Before fetch --", this.state.requests);
    // console.log("Before fetch --", this.state.users);

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
