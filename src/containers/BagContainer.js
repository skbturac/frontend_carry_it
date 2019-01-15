import React, { Component } from "react";
import BagItem from "../components/BagItem";
import { Grid } from "semantic-ui-react";

class BagContainer extends Component {
  render() {
    return (
      <Grid className="bag-container" columns={3}>
        <BagItem />
      </Grid>
    );
  }
}

export default BagContainer;
