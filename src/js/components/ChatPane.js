import React from 'react';
import SidePane from './SidePane';
import MessagePane from './MessagePane';
import avatar from '../../img/avatar.png';

export default class ChatPane extends React.Component {
  render() {
    return (
      <div className="chat-window">
        <SidePane
          users={this.props.users}
          currentUser={this.props.currentUser}
        />

        <MessagePane
          signOut={this.props.signOut}
          userCount={this.props.users.length}
          messages={this.props.messages}
        />
      </div>

    );
  }
}
