import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import Posts from "../components/Posts";
import MenuBar from "../components/MenuBar";
import { Card } from "semantic-ui-react";

class ActivityContainer extends Component {
  constructor(props) {
    super(props);
  }

  // handleSearch = (event) => {
  //   console.log(event.target.value);
  //   this.setState({searchBox: event.target.value}, () => console.log(this.state))
  // }
  // handleDisplay = () => {
  //   const toRender = this.state.postData.filter(postObj => postObj.zipcode.includes(this.state.searchBox))
  //   return toRender
  // }

  render() {
    return (
      <div className="activity-container">
        <MenuBar handleItemClick={this.props.handleItemClick}/>
        <SearchBox handleSubmit={this.props.handleSubmit}/>
        <div className="activity-card-container">
          <Card floated="right">
            <Posts handleItemClick={this.props.handleItemClick} />
          </Card>
        </div>
      </div>
    );
  }
}

export default ActivityContainer;
