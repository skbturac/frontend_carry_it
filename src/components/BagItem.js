import React, { Component } from "react";
import AddNewBagItem from "./AddNewBagItem";
import {
  Grid,
  Card,
  Icon,
  Image,
  Button,
  Popup,
  Header
} from "semantic-ui-react";

class BagItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderServiceCard = () => {
    return (
      <Grid.Column>
        <Card raised centered>
          <Button
            size="mini"
            onClick={() =>
              this.props.handleDeleteButton(this.props.serviceObj.id)
            }
            floated="right"
            icon="close"
          />
          <Card.Content>
            <Card.Header>
              {this.props.serviceObj
                ? this.props.serviceObj.package.sender.first_name
                : null}{" "}
              {this.props.serviceObj
                ? this.props.serviceObj.package.sender.last_name
                : null}
            </Card.Header>
            <Card.Meta>
              <strong>Pick-Up Address</strong>
              <br />
              {this.props.serviceObj
                ? this.props.serviceObj.package.sender.home_address
                : null}
              <br />
            </Card.Meta>
            <Card.Meta />
          </Card.Content>
          <Card.Content extra>
            <Image
              size="small"
              src={
                this.props.serviceObj
                  ? this.props.serviceObj.package.image
                  : null
              }
            />
          </Card.Content>
          <Popup
            trigger={<Button>Show Details</Button>}
            flowing
            hoverable
          >
            <Grid centered divided columns={3}>
              <Grid.Column textAlign="center">
                <Header as="h4">Weight</Header>
                <p>
                  {this.props.serviceObj
                    ? this.props.serviceObj.package.weight
                    : null}
                </p>
                <Header as="h4">Height</Header>
                <p>
                  {this.props.serviceObj
                    ? this.props.serviceObj.package.height
                    : null}
                </p>
                <Header as="h4">Length</Header>
                <p>
                  {this.props.serviceObj
                    ? this.props.serviceObj.package.length
                    : null}
                </p>
                <Header as="h4">Earning</Header>
                <p>
                  $
                  {this.props.serviceObj
                    ? this.props.serviceObj.price
                    : null}
                </p>
                <div className="ui two buttons" />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Header as="h4">
                  <strong>Package Description</strong>
                </Header>
                <p>
                  {this.props.serviceObj
                    ? this.props.serviceObj.package.description
                    : null}
                </p>
                <Header as="h4">
                  <strong>Address Of Destination</strong>
                </Header>
                <p>
                  {this.props.serviceObj
                    ? this.props.serviceObj.destination_address
                    : null}
                </p>
                <Header as="h4">
                  <strong>Delivery Date</strong>
                </Header>
                <p>
                  {this.props.serviceObj
                    ? this.props.serviceObj.package.delivery_date
                    : null}
                </p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Button
                  onClick={() =>
                    this.props.handleDelivery(this.props.serviceObj)
                  }
                  basic
                  color="green"
                >
                  Delivered
                </Button>
              </Grid.Column>
            </Grid>
          </Popup>
        </Card>
      </Grid.Column>
    );
  };

  render() {
    console.log(this.props);
    return <>{this.renderServiceCard()}</>;
  }
}

export default BagItem;
