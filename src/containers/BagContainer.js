import React, { Component } from "react";
import BagItem from "../components/BagItem";

class BagContainer extends Component {
  render() {
    return (
      <div className="bag-container">
        "All Bags listed as cards side by side. These bags are bag that have been accepted by the user to carry"
        <BagItem />
      </div>
    );
  }
}

export default BagContainer;
