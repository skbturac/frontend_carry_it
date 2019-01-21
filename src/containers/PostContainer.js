import React, { Component } from "react";
import Packages from "../components/Packages";
import PostForm from "../components/PostForm";

import { Grid } from "semantic-ui-react";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packageData: []
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
      .then(packData => {
        // console.log("Before fetch --", packData);
        this.setState({ packageData: packData } //, () => console.log("After fetch --", packData)
      );
      });
  }

  handleDelete = id => {
    this.setState({
      packageData: this.state.packageData.filter(
        packageObj => id !== packageObj.id
      )
    });
  };

  handleNewItem = obj => {
      const newPackage = [...this.state.packageData, obj ]
      this.setState({
        packageData: newPackage
      })
  };
  renderCards = () => {
    return this.state.packageData.map(packageObj => (
      <Packages
        handleDelete={this.handleDelete}
        packageObj={packageObj}
        key={packageObj.id}
      />
    ));
  };
  postFormModal = () => {
    return (
      <PostForm
        packageData={this.packageData}
        handleNewItem={this.handleNewItem}
      />
    );
  };

  render() {
    // console.log("Props PostContainer are ---,", this.state);

    return (
      <>
        <Grid className="your-packages-and-postfrom-container" columns={3}>
          {this.renderCards()}
          {this.postFormModal()}
        </Grid>
      </>
    );
  }
}

export default PostContainer;
