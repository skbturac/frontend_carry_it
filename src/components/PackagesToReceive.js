import React, { Component } from "react";
import { Grid, Card, Icon, Image, Button } from "semantic-ui-react";

class PackagesToReceive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderReceivingCard = () => {
    return (
      <Grid.Column>
        <Card raised centered>
          <Card.Content>
            <Card.Header>Senders Full Name</Card.Header>
            <Card.Meta>
              {" "}
              <strong>Pick-Up Address</strong>
              <br />
            </Card.Meta>
            <Card.Meta />
          </Card.Content>
          <Card.Content extra>
            <Image
              size="small"
              src={
                this.props.receivesObj.package.image
                  ? this.props.receivesObj.package.image
                  : null
              }
            />
            <Card.Description>
              <strong>
                {this.props.receivesObj.package.description
                  ? this.props.receivesObj.package.description
                  : null}
              </strong>
            </Card.Description>
            Weight
            <Card.Meta>
              {this.props.receivesObj.package.weight
                ? this.props.receivesObj.package.weight
                : null}
            </Card.Meta>
            Height
            <Card.Meta>
              {this.props.receivesObj.package.height
                ? this.props.receivesObj.package.height
                : null}
            </Card.Meta>
            Length
            <Card.Meta>
              {this.props.receivesObj.package.length
                ? this.props.receivesObj.package.length
                : null}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <strong>Address Of Destination</strong>
            <Card.Meta>
              {this.props.receivesObj.destination_address
                ? this.props.receivesObj.destination_address
                : null}
            </Card.Meta>
            <br />
            <strong>
              Delivery Date
              <br />
              {this.props.receivesObj.package.delivery_date
                ? this.props.receivesObj.package.delivery_date
                : null}
            </strong>
          </Card.Content>
          <Card.Meta>
            Paid Amount: $
            {this.props.receivesObj.price ? this.props.receivesObj.price : null}
          </Card.Meta>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                basic
                color="green"
              >
                Received
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  };


  render() {
    return (
      <>
        {this.renderReceivingCard()}
      </>
    );
  }
}

export default PackagesToReceive;
