import React from 'react';
import { Header, Form, TextArea, Button } from 'semantic-ui-react';

class Home extends React.Component {
  state = { posts: '' }

  render (){
    
  return(
    <div>
    <Form>
    <Header>Your Posts</Header>
    <TextArea placeholder='Write a post ' />
    <br />
    <br />
    <Button color='green' >Submit</Button>
    <Button color='red'>Delete</Button>
    </Form>
    </div>
  )
  }
}

//UserName
//Date of post
//Text Form

export default Home;

