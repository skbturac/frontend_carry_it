import React, { Component } from "react";
import PackagesToReceive from "../components/PackagesToReceive";
import { Grid } from "semantic-ui-react";

class ReceiverContainer extends Component {
  render() {
    return (
      <Grid className="receiver-container" columns={3}>
        <PackagesToReceive />
      </Grid>
    );
  }
}

export default ReceiverContainer;
