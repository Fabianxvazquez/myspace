import React from 'react';
import './App.css';
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
import MyFriends from './components/MyFriends'

import FriendRequests from './components/FriendRequests'


const App = () => (
  <>
    <Navbar />
    <FetchUser>
    <Container>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path='/my_friends' component={MyFriends} />
        <ProtectedRoute exact path='/friend_requests' component={FriendRequests} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </FetchUser>
  </>
)

export default App;