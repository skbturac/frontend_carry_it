import React, { Component } from "react";
import BagItem from "../components/BagItem";
import { Card } from 'semantic-ui-react'


class BagContainer extends Component {
  render() {
    return (
      <div className="bag-container">
        <Card floated='right'>
          <BagItem />
        </Card>
      </div>
    );
  }
}

export default BagContainer;
