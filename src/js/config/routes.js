import React from 'react';
import Welcome from '../containers/Welcome';
import ApplicationLayout from '../components/layouts/ApplicationLayout';
import {Route, IndexRoute} from 'react-router';
import SignUp from '../containers/SignUp';
import ChatWindow from '../containers/ChatWindow';
import SignIn from '../containers/SignIn';

export default (
  <Route path="/" component={ApplicationLayout}>
    <Route path="welcome" component={Welcome} />
    <Route path="messages" component={ChatWindow} />
    <Route path="sign-in" component={SignIn} />

  <IndexRoute component={SignUp} />
  </Route>
);
