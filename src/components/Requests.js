import React, { Component } from "react";
import { Grid, Card, Icon, Image, Button, Loader } from "semantic-ui-react";

class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRequesstsCard = () => {
    return (
      <Grid.Column>
        <Card raised centered>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={
                this.props.serviceObj.sender.avatar
                  ? this.props.serviceObj.sender.avatar
                  : null
              }
            />
            <Card.Header>
              {this.props.serviceObj.sender.first_name
                ? this.props.serviceObj.sender.first_name
                : null}{" "}
              {this.props.serviceObj.sender.last_name
                ? this.props.serviceObj.sender.last_name
                : null}
            </Card.Header>
            <Card.Meta>
              {" "}
              <strong>Pick-Up Address</strong>
              <br />
              {this.props.serviceObj.sender.home_address
                ? this.props.serviceObj.sender.home_address
                : null}
            </Card.Meta>
            <Card.Meta />
          </Card.Content>
          <Card.Content extra>
            <Image
              size="small"
              src={
                this.props.serviceObj.image ? this.props.serviceObj.image : null
              }
            />
            <Card.Description>
              <strong>
                {this.props.serviceObj.description
                  ? this.props.serviceObj.description
                  : null}
              </strong>
            </Card.Description>
            Weight
            <Card.Meta>
              {this.props.serviceObj.weight
                ? this.props.serviceObj.weight
                : null}
            </Card.Meta>
            Height
            <Card.Meta>
              {this.props.serviceObj.height
                ? this.props.serviceObj.height
                : null}
            </Card.Meta>
            Length
            <Card.Meta>
              {this.props.serviceObj.length
                ? this.props.serviceObj.length
                : null}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <strong>Address Of Destination</strong>
            <Card.Meta>
              {this.props.serviceObj.receiver.home_address
                ? this.props.serviceObj.receiver.home_address
                : null}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                onClick={() => this.props.createService(this.props.serviceObj)}
                basic
                color="green"
              >
                Accept
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  };

  render() {
    // console.log("!!!!!!! Props Requests are ---,", this.props.serviceObj);
    return <>{this.renderRequesstsCard()}</>;
  }
}

export default Requests;

// <Button basic color="red">
//   Decline
// </Button>

// <Card.Meta>Friends of Elliot</Card.Meta>

// { this.props.users.firstname ? this.props.users.firstname : null }
// { this.props.users.lastname ? this.props.users.lastname : null }
// { this.props.users.avatar ? this.props.users.avatar : null }

// description: "A box of book"
// height: 3
// id: 6
// image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Package.svg"
// length: 3
// receiver_id: 2
// sender_id: 1
// weight: 10

// <Card.Content>
//         <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
//         <Card.Header>Steve Sanders</Card.Header>
//         <Card.Meta>Friends of Elliot</Card.Meta>
//         <Card.Description>
//           Steve wants to add you to the group <strong>best friends</strong>
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//     <Card>
//       <Card.Content>
//         <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
//         <Card.Header>Molly Thomas</Card.Header>
//         <Card.Meta>New User</Card.Meta>
//         <Card.Description>
//           Molly wants to add you to the group <strong>musicians</strong>
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//     <Card>
//       <Card.Content>
//         <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
//         <Card.Header>Jenny Lawrence</Card.Header>
//         <Card.Meta>New User</Card.Meta>
//         <Card.Description>Jenny requested permission to view your contact details</Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>

// <Grid.Column>
//   <Card size="small" raised centered>
//     <Image
//       size="large"
//       src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Package.svg"
//     />
//     <Card.Content>
//       <Card.Description>
//         Hello
//         <Card.Header>Estimated Amount ($) 1000</Card.Header>
//       </Card.Description>
//       <Card.Meta>Scheduled Delivery Today</Card.Meta>
//     </Card.Content>
//     <Card.Content extra>
//       <Card.Description> Weight (lb): </Card.Description>
//       <a>3</a>
//       <Card.Description> Height (inch) </Card.Description>
//       <a>6</a>
//       <Card.Description> Length (inch) </Card.Description>
//       <a>8</a>
//     </Card.Content>
//     <Button icon="delete" />
//   </Card>
// </Grid.Column>
// <strong>best friends</strong>
