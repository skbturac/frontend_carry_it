import React, { Component } from "react";
import { Grid, Card, Icon, Image } from "semantic-ui-react";

class PackagesToReceive extends Component {
  render() {
    return (
      <>
        <Grid.Column>
          <Card size="small" raised centered>
            <Image
              size="large"
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
      </>
    );
  }
}

export default PackagesToReceive;
