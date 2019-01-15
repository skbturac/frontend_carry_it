import React, { Component } from "react";
import { Card, Icon, Button, Grid } from "semantic-ui-react";

class PostForm extends Component {
  render() {
    return (
      <>
        <Grid.Column className="post-form">
          <Card raised centered>
            <Icon disabled name="image outline" size="massive" fitted />
            <Button icon="add" size="massive" />
          </Card>
        </Grid.Column>
      </>
    );
  }
}

export default PostForm;
// <>
//   <Grid.Column className="post-form">
//     <Card raised centered>
//       <Button icon="add" />
//       <Icon disabled name="image outline" size="massive" fitted />
//     </Card>
//   </Grid.Column>
// </>;

// <div className="post-form">
//   <Card raised centered>
//     <Button icon="add" />
//     <Icon disabled name="image outline" size="massive" fitted />
//   </Card>
// </div>
