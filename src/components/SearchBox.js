import React, { Component } from "react";
import { Input } from "semantic-ui-react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="search-box">
        <Input icon="search" placeholder="Search..." />
      </div>
    );
  }
}

export default SearchBox;
