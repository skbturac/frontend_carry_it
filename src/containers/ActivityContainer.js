import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import ActivityPostsContainer from "../components/ActivityPostsContainer";
import MenuBar from "../components/MenuBar";

class ActivityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBox: "",
      requests: [],
      users: []
    };
  }

  // "http://localhost:4000/api/v1/awaiting_packages"
  componentDidMount() {
    fetch("http://localhost:4000/api/v1/awaiting_packages", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(requestsData => {
        console.log("Before setState --", requestsData);
        this.setState({ requests: requestsData });
        // console.log("After fetch --", requestsData);
      });
    fetch("http://localhost:4000/api/v1/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(usersData => {
        // console.log("Before fetch --", usersData);
        this.setState({ users: usersData });
        // console.log("After fetch --", usersData);
      });
  }

  handleSearch = event => {
    console.log(event.target.value);
    this.setState({ searchBox: event.target.value }, () =>
      console.log(this.state)
    );
  };
  handleDisplay = () => {
    const toRender = this.state.requests.filter(postObj =>
       postObj.receiver.home_address.toLowerCase().includes(this.state.searchBox)
    );
    return toRender;
  };

  handleAccept = (id) => {
    console.log(id)
    this.setState({
      requests: this.state.requests.filter(
        requestObj => id !== requestObj.id
      )
    });
  }

  render() {
    console.log(this.state.requests)

    return (
      <div className="activity-container">
        <MenuBar handleItemClick={this.props.handleItemClick} />
        <SearchBox
          handleDisplay={this.handleDisplay}
          handleSearch={this.handleSearch}
        />
        <div className="activity-card-container">
          <ActivityPostsContainer
            requests={this.handleDisplay()}
            users={this.state.users}
            handleItemClick={this.props.handleItemClick}
            handleAccept = {this.handleAccept}
          />
        </div>
      </div>
    );
  }
}

export default ActivityContainer;
