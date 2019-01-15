import React, { Component, Fragment } from "react";
import { Grid, Card, Icon, Image, Button } from "semantic-ui-react";

class AddNewBagItem extends Component {
  render() {
    return (
      <>
        <Grid.Column>
          <Card raised centered>
            <Icon disabled name="image outline" size="massive" fitted />
            <Button icon="add" size="massive" />
          </Card>
        </Grid.Column>
      </>
    );
  }
}

export default AddNewBagItem;
