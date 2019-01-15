import React, { Component } from "react";
import Packages from "../components/Packages";
import { Grid } from "semantic-ui-react";

class PostContainer extends Component {
  render() {
    return (
      <Grid className="your-packages-and-postfrom-container" columns={3}>
        <Packages />
      </Grid>
    );
  }
}

export default PostContainer;
