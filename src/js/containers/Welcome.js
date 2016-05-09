import React from 'react';
import _ from 'lodash';
import history from '../helpers/history';
import {connect} from 'react-redux';
import loadUsers from '../actions/loadUsers';
import {bindActionCreators} from 'redux';
import loadMessages from '../actions/loadMessages';

const mapStateToProps = () => {
  return {};
};

@connect(
  mapStateToProps,
  dispatch => ({
    ...bindActionCreators({ loadUsers, loadMessages }, dispatch)
  })
)

export default class Welcome extends React.Component {
  componentWillMount() {
    const messages = [
      'always get plenty of sleep if you can!',
      'sometimes you eat the bear.  and sometimes?  well, the bear eats you.',
      'you\'re awesome!',
      'make every day better than the last. especially this one!'
    ];
    this.message = _.sample(messages);

    this.props.loadUsers();
    this.props.loadMessages();
  }

  componentDidMount() {
    setTimeout(() => {
      history.push('messages');
    }, 2000);
  }

  render() {
    return (
      <div className="loading">
        <h2 className="text-center">
          Loading...
        </h2>

        <h3 className="text-center">
          {this.message}
        </h3>
      </div>
    );
  }

}
