import React, { Component } from "react";
import BagItem from "../components/BagItem";
import { Card } from "semantic-ui-react";

class BagContainer extends Component {
  render() {
    return (
      <div className="bag-container">
        <Card.Group itemsPerRow={2}>
            <BagItem />
        </Card.Group>
      </div>
    );
  }
}

export default BagContainer;
