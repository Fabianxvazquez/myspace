import React from 'react';
import axios from 'axios'
import { Link, } from 'react-router-dom'
import { Header, Image, Card, Button, } from 'semantic-ui-react';

class Home extends React.Component {
  
  state = { friends: [], };
  
  componentDidMount() {
    axios.get('/api/friends')
    .then( res =>  this.setState({ friends: res.data, }))
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
  
  declineFriend = (id) => {
    const { friends, } = this.state;
    this.setState({ friends: friends.filter( c => c.id !==id),})
  }

  approveFriend = (id) => {
    const { friends, } = this.state
    axios.put(`/api/friends/${id}`).then( () => this.setState ({ friends: friends.filter( c => c.id !== id ), }) )
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
            <Button basic color='green' onClick={() => this.approveFriend(friend.id)}>
              Approve
            </Button>
            <Button basic color='red' onClick={() => this.declineFriend(friend.id)}>
              Decline
            </Button>
          </div>
        </Card.Content>
        </Card>
        <Link to="/my_friends">
            <Button color="blue">
              My Friends
            </Button>
          </Link>
        </div>
      )
    }
    else {
      return <Header textAlign="center">No More Friends</Header>
    }
  }
}



export default Home;
