import React, { Component } from "react";
import { Card, Icon, Button } from "semantic-ui-react";

class PostForm extends Component {
  render() {
    return (
      <div className="post-form">
        <Card raised centered>
          <Button icon="add" />
          <Icon disabled name="image outline" size="massive" fitted />
        </Card>
      </div>
    );
  }
}

export default PostForm;
