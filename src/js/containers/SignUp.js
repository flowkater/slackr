import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import history from '../helpers/history';
import SignUpForm from '../components/SignUpForm';
import signUp from '../actions/signUp';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    "signup" : getParams(state.form.signup, ['nickname', 'email', 'password'])
  };
}

const getParams = (form, fields) => {
  if(form === undefined) {
    return {};
  }
  let params = {};
  for (let field of fields) {
    const fieldValue = form[field];
    if(fieldValue) {
      params[field] = fieldValue.value;
    }
    else {
      params[field] = '';
    }
  }

  return params;
};


@connect(
  mapStateToProps,
  dispatch => ({
    ... bindActionCreators({ signUp }, dispatch)
  } )
)


export default class SignUp extends React.Component {
  submit(e) {
    const userAttributes = {
      user: {
        nickname: this.props.signup.nickname,
        email:    this.props.signup.email,
        password: this.props.signup.password
      }
    };

    this.props.signUp(userAttributes);

    history.push("messages");

    e.preventDefault();
  }


  render() {
    return (
      <SignUpForm
      submit={(e) => { this.submit(e); } }
      />
    );
  }
}
