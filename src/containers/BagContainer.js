import React, { Component } from "react";
import BagItem from "../components/BagItem";
import { Grid } from "semantic-ui-react";

class BagContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/v1/user_services", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(servicesData => {
        console.log("Before fetch --", servicesData);
        this.setState({ services: servicesData }, () => console.log("After fetch --", servicesData)
      );
      });
  }
  renderBagPosts = () => {
    return this.state.requests.map(serviceObj => (
      <BagItem createService={this.createService} serviceObj={serviceObj} key={serviceObj.id} />
    ));
  };

  render() {
    return (
      <Grid className="bag-container" columns={3}>
        <BagItem />
      </Grid>
    );
  }
}

export default BagContainer;

// status
// price
// destination_address
// destination_zipcode
// package_id
// carrier_id
