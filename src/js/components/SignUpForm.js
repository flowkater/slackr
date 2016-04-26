import React from 'react';
import {reduxForm} from 'redux-form';

class  SignUpForm extends React.Component {
  render() {
    const {fields: {email, nickname, password}, submit} = this.props;

    const errors = this.props.currentUser.errors;

    let nicknameErrors = '';

    if(errors !== undefined && errors.nickname !== undefined && errors.nickname.length > 0) {
      nicknameErrors = (
        <div className="error">
          {this.props.currentUser.errors.nickname[0]}
        </div>
      );
    }

    return (
      <div className="card col-xs-6 col-xs-offset-3">
        <h1 className="text-center">Sign up for Slackr</h1>
        <form className="sign-up-form text-center" onSubmit={submit}>
          <div className="col-xs-6 col-xs-offset-3">
            <label>Enter Your <strong>Nickname</strong>:</label>
            <input type="text" className="form-control" placeholder="Nickname" {...nickname} />
            {nicknameErrors}

            <label>Enter Your <strong>Email</strong>:</label>
            <input type="text" className="form-control" placeholder="Email" {...email} />
            <label>Enter Your <strong>Password</strong>:</label>
            <input type="text" className="form-control" placeholder="Password" {...password} />

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

SignUpForm = reduxForm({
  form: 'signup',
  fields: ['nickname', 'email', 'password']
})(SignUpForm);

export default SignUpForm;
