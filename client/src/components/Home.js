import React from 'react';
import axios from 'axios'
// import { Link, } from 'react-router-dom'
import { Header, Image, Card, Button, } from 'semantic-ui-react';

class Home extends React.Component {
  
  state = { friends: [], };
  
  componentDidMount() {
    axios.get('/api/friends').then( res => { this.setState({ friends: res.data, })})
  }

  sample = () => {
    const { friends, } = this.state;
    if (friends.length) {
      const index = Math.floor(Math.random() * friends.length);
      return friends[index];
    } else {
      return null;
    }
  }
  
  render() {
    const friend = this.sample();
    if(friend){
    return (
      <div>
      <br />
      <Header as='h1'>Friends</Header>
      <br />
      <Card key={friend.id}>
        <Card.Content>
          <Image src={friend.avatar} />
          <Card.Header>{friend.name}</Card.Header>
          <Card.Meta>{friend.occupation}</Card.Meta>
          <Card.Description>
          {friend.gender}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
            </Button>
            <Button basic color='red'>
              Decline
            </Button>
          </div>
        </Card.Content>
        </Card>
        </div>
      )
    }
    else {
      return <Header textAlign="center">No More Friends</Header>
    }
  }
}



export default Home;
