import React from 'react';
import _ from 'lodash';
import history from '../helpers/history';

export default class Welcome extends React.Component {
  componentWillMount() {
    const messages = [
      "always get plenty of sleep if you can!",
      "sometimes you eat the bear.  and sometimes?  well, the bear eats you.",
      "you're awesome!",
      "make every day better than the last.  especially this one!"
    ];
    this.message = _.sample(messages);
  }

  componentDidMount() {
    setTimeout(() => {
      history.pushState(null, "sign-up");
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
