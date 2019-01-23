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
            <Card.Header>
              {this.props.receivesObj.sender
                ? this.props.receivesObj.sender.first_name
                : null}{" "}
              {this.props.receivesObj.sender
                ? this.props.receivesObj.sender.last_name
                : null}
            </Card.Header>
            <Card.Meta>
              <strong>Pick-Up Address</strong>
              <br/>
              {this.props.receivesObj.sender
                ? this.props.receivesObj.sender.home_address
                : null}
              <br />
            </Card.Meta>
            <Card.Meta />
          </Card.Content>
          <Card.Content extra>
            <Image
              size="small"
              src={this.props.receivesObj ? this.props.receivesObj.image : null}
            />
            </Card.Content>
            <Card.Content extra>
            <Card.Description>
              <strong>
                {this.props.receivesObj
                  ? this.props.receivesObj.description
                  : null}
              </strong>
            </Card.Description>
            Weight
            <Card.Meta>
              {this.props.receivesObj ? this.props.receivesObj.weight : null}
            </Card.Meta>
            Height
            <Card.Meta>
              {this.props.receivesObj ? this.props.receivesObj.height : null}
            </Card.Meta>
            Length
            <Card.Meta>
              {this.props.receivesObj ? this.props.receivesObj.length : null}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <strong>Address Of Destination</strong>
            <Card.Meta>
              {this.props.receivesObj.receiver
                ? this.props.receivesObj.receiver.home_address
                : null}
            </Card.Meta>
            <br />
            <strong>
              Delivery Date
              <br />
              {this.props.receivesObj
                ? this.props.receivesObj.delivery_date
                : null}
            </strong>
          </Card.Content>

          <Card.Content extra>
          <Card.Meta>
            {this.props.receivesObj.service ? this.props.receivesObj.service.status : null}
          </Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  };

  render() {
    console.log(this.props);
    return <>{this.renderReceivingCard()}</>;
  }
}

export default PackagesToReceive;

// <div className="ui two buttons">
//   <Button basic color="green" >
//     Received
//   </Button>
// </div>

// <Card.Meta>
//   Paid Amount: $
//   {this.props.receivesObj.service ? this.props.receivesObj.service.price : null}
// </Card.Meta>
