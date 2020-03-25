import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Segment } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          <Link to='/friend_requests'>
            <Menu.Item
              name='friend requests'
              id='friend_requests'
              active={this.props.location.pathname === '/friend_requests'}
            />
          </Link>
          <Link to='/my_friends'>
            <Menu.Item
              name='my friends'
              id='my_friends'
              active={this.props.location.pathname === '/my_friends'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
      </Segment>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}


export default withRouter(ConnectedNavbar)