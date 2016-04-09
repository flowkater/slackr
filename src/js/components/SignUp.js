import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import axios from 'axios';

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


@connect(mapStateToProps)


class SignUp extends React.Component {
  submit(e) {
    const userAtrributes = {
      user: {
        username: this.props.signup.nickname,
        email:    this.props.signup.email,
        password: this.props.signup.password
      }
    };

    const url = "http://slackr-api.thefirehoseproject.com/1d163b2919d9a30d98db/users";
    const result = axios.post(url, userAtrributes);
    this.props.dispatch({
      type: "LOAD_CURRENT_USER",
      payload: result
    });

    e.preventDefault();
  }


  render() {
    const {fields: {email, nickname, password}} = this.props;

    return (
      <div className="card col-xs-6 col-xs-offset-3">
        <h1 className="text-center">
          Sign up for Slackr
        </h1>

        <form className="sign-up-form text-center" onSubmit={(e) => { this.submit(e); } }>
          <div className="col-xs-6 col-xs-offset-3">
            <label>Enter Your <strong>Nickname</strong>:</label>
            <input type="text" className="form-control" placeholder="Nickname" { ...nickname }/>
            <label>Enter Your <strong>Email</strong>:</label>
            <input type="text" className="form-control" placeholder="Email" {... email} />
            <label>Enter Your <strong>Password</strong>:</label>
            <input type="text" className="form-control" placeholder="Password" {... password}/>

            <button type="submit" className="btn btn-block btn-primary">Create Account</button>

          </div>
          <br className="clear" />

          <div className="text-center orSignIn">
            <a href="javascript:void(0);">Sign In</a>
          </div>
        </form>

      </div>
    );
  }
}

SignUp = reduxForm({
  form: 'signup',
  fields: ['nickname', 'email', 'password']
})(SignUp);

export default SignUp;
