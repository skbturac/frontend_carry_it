import React, { Component } from "react";
import PackageHistory from "../components/HistoryItem";
import { Grid } from "semantic-ui-react";

class PackageHistoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/v1/user_packages", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(packagesData => {
        console.log("Before fetch --", packagesData);
        this.setState({ packages: packagesData }, () =>
          console.log("After fetch --", packagesData)
        );
      });
  }

  handleDisplay = () => {
    console.log(this.state.packages)
    const toRender = this.state.packages.filter(serviceObj =>
       serviceObj.service.status === "Delivered")
    return toRender;
  }

  renderPackageHistory = () => {
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
      packages: this.state.packages.filter(serviceObj => id !== serviceObj.id)
    });
  };

  render() {
    return (
      <Grid className="history-package-container" columns={3}>
        {this.renderPackageHistory()}
      </Grid>
    );
  }
}

export default PackageHistoryContainer;
