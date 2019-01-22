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
        this.setState({ services: servicesData }, () =>
          console.log("After fetch --", servicesData)
        );
      });
  }

  handleDeleteButton = id => {
    fetch(`http://localhost:4000/api/v1/services/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    this.handleDelete(id);
  };

  handleDelivery = obj => {
    console.log(obj)
    fetch(`http://localhost:4000/api/v1/services/${obj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        service: {
          status: "Delivered",
          price: obj.price ,
          destination_address: obj.destination_address ,
          package_id: obj.id
        }
      })
    // }).then(response => response.json());
    // .then(json => {
    //   this.handleDelivered(json)
    })
  }

  handleDisplay = () => {

  }

  renderBagPosts = () => {
    return this.state.services.map(serviceObj => (
      <BagItem
        serviceObj={serviceObj}
        key={serviceObj.id}
        handleDeleteButton={this.handleDeleteButton}
        handleDelivery={this.handleDelivery}
      />
    ));
  };

  handleDelete = id => {
    this.setState({
      services: this.state.services.filter(serviceObj => id !== serviceObj.id)
    });
  };

  render() {
    return (
      <Grid className="bag-container" columns={3}>
        {this.renderBagPosts()}
      </Grid>
    );
  }
}

export default BagContainer;
