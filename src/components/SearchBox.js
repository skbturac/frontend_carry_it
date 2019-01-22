import React, { Component } from "react";
import { Input } from "semantic-ui-react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-box">
        <Input
          style={{ width: "290px" }}
          icon="search"
          placeholder="Search by Destination Zipcode/City"
          type="text"
          onChange={this.props.handleSearch}
        />
      </div>
    );
  }
}

export default SearchBox;
