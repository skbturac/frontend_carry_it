import React, { Component } from "react";
import HistoryItem from "../components/HistoryItem";
import { Grid } from "semantic-ui-react";

class HistoryContainer extends Component {
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

  handleDisplay = () => {
    console.log(this.state.services)
    const toRender = this.state.services.filter(serviceObj =>
       serviceObj.status === "Delivered")
    return toRender;
  }

  renderBagHistory = () => {
    const display = this.handleDisplay()
    return display.map(serviceObj => (
      <HistoryItem
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
      <Grid className="history-bag-container" columns={3}>
        {this.renderBagHistory()}
      </Grid>
    );
  }
}

export default HistoryContainer;
