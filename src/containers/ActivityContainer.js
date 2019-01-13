import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import Posts from "../components/Posts";
import MenuBar from "../components/MenuBar";
import { Card } from "semantic-ui-react";

class ActivityContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="activity-container">
        <MenuBar />
        <SearchBox />
        <div className="activity-card-container">
          <Card floated="right">
            <Posts />
          </Card>
        </div>
      </div>
    );
  }
}

export default ActivityContainer;
