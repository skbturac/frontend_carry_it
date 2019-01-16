import React, { Component } from "react";
import PostFormModal from "./PostFormModal";
import { Card, Icon, Grid } from "semantic-ui-react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weightInput: "",
      heightInput: "",
      lengthInput: "",
      descriptionInput: "",
      deliverydateInput: "",
      imageURLInput: ""
    };
  }

  handleInputChange = event => {
    console.log(event.target.value);
    console.log(event.target.lengthInput);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    fetch("http://localhost:4000/api/v1/packages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          weight: this.state.weightInput,
          height: this.state.heightInput,
          length: this.state.lengthInput,
          description: this.state.descriptionInput,
          delivery_date: this.state.deliverydateInput,
          image: this.state.imageURLInput
        }
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  };

  render() {
    console.log("Props PostForm are ---,", this.props);
    return (
      <>
        <Grid.Column className="post-form">
          <Card raised centered>
            <Icon disabled name="image outline" size="massive" fitted />
            <PostFormModal
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
              packageInfo={this.state}
              handleDisplay={this.props.handleDisplay}
            />
          </Card>
        </Grid.Column>
      </>
    );
  }
}

export default PostForm;
