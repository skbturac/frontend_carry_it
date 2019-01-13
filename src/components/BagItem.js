import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class BagItem extends Component {
  render() {
    return (
      <div className="bag-item-container">
        <Image src="https://pamco-imaging.com/wp-content/uploads/2017/12/parcel-500-660-500x600.jpg" />
        <Card.Content>
          <Card.Description>
            <Card.Header>Amount: $20</Card.Header>A box of notebooks
          </Card.Description>
          <Card.Meta>Scheduled Delivery Tomorrow, Jan 12 2018</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            10 Viewed
          </a>
        </Card.Content>
      </div>
    );
  }
}

export default BagItem;
