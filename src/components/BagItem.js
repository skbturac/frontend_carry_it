import React, { Component } from "react";
import AddNewBagItem from "./AddNewBagItem";
import { Grid, Card, Icon, Image } from "semantic-ui-react";

class BagItem extends Component {
  render() {
    return (
      <>
        <Grid.Column>
          <Card raised centered>
            <Image
              as="a"
              size="massive"
              src="https://pamco-imaging.com/wp-content/uploads/2017/12/parcel-500-660-500x600.jpg"
            />
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
          </Card>
        </Grid.Column>
        <AddNewBagItem />
      </>
    );
  }
}

export default BagItem;
