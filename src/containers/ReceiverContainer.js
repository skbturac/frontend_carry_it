import React, { Component } from "react";
import PackagesToReceive from "../components/PackagesToReceive";
import { Grid } from "semantic-ui-react";

class ReceiverContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receives: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/v1/user_receiving_packages", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(receivesData => {
        console.log("Before fetch --", receivesData);
        this.setState({ receives: receivesData }, () =>
          console.log("After fetch --", receivesData)
        );
      });
  }

  renderReceiving = () => {
    return this.state.receives.map(receivesObj => (
      <PackagesToReceive
        receivesObj={receivesObj}
        key={receivesObj.id}
      />
    ));
  };

  render() {
    return (
      <Grid className="receiver-container" columns={3}>
        {this.renderReceiving}
      </Grid>
    );
  }
}

export default ReceiverContainer;
