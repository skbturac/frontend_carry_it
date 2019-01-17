import React, { Component } from "react";
import { Grid, Card, Icon, Image, Button, Loader } from "semantic-ui-react";

class Packages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDeleteButton = id => {
    fetch(`http://localhost:4000/api/v1/packages/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    this.props.handleDelete(id);
  };

  renderCard = () => {
    return (
      <Grid.Column>
        <Card size="small" raised centered>
          <Image
            size="large"
            src={
              this.props.packageObj.image ? this.props.packageObj.image : null
            }
          />
          <Card.Content>
            <Card.Description>
              {this.props.packageObj.description
                ? this.props.packageObj.description
                : null}
              <Card.Header>
                Estimated Amount ($)
                {this.props.packageObj.price
                  ? this.props.packageObj.price
                  : null}
              </Card.Header>
            </Card.Description>
            <Card.Meta>
              Scheduled Delivery{" "}
              {this.props.packageObj.delivery_date
                ? this.props.packageObj.delivery_date
                : null}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Card.Description> Weight (lb): </Card.Description>
            <a>
              {this.props.packageObj.weight
                ? this.props.packageObj.weight
                : null}
            </a>
            <Card.Description> Height (inch) </Card.Description>
            <a>
              {this.props.packageObj.height
                ? this.props.packageObj.height
                : null}
            </a>
            <Card.Description> Length (inch) </Card.Description>
            <a>
              {this.props.packageObj.length
                ? this.props.packageObj.length
                : null}
            </a>
          </Card.Content>
          <Card.Content extra>
            <a>
              Reaching To Our Carriers
              <Icon name="user" />
              <Loader active inline="centered" />
            </a>
          </Card.Content>

          <Button
            onClick={() => this.handleDeleteButton(this.props.packageObj.id)}
            icon="delete"
          />
        </Card>
      </Grid.Column>
    );
  };

  render() {
    console.log("Props Packages are ---,", this.props.packageData);
    return <>{this.renderCard()}</>;
  }
}

export default Packages;
