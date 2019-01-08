import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

class Posts extends Component {
  render() {
    return (
      <div className="posts-container">
        "Posts"
        <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
          <Grid.Column width={4} />
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}

export default Posts;
