import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from "prop-types";

export default class LoginView extends Component {

  constructor(props, context) {
    super(props, context);

    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
  }

  onLoginButtonClick(){
      window.OAuth.initialize('Y9Xb9oKFDroP5k_SY5Dxtdp1OOI')

      window.OAuth.popup('instagram').done(function(result) {      
      
      /*
        save user session
      */
      localStorage.setItem("userLogged", result.user);
      localStorage.setItem("accessToken", result.access_token);

      /*
        create or update user data
      */
      

      /*
        redirect
      */
      //this.context.router.history.push("/notifications");
    })
  }

  render() {
    return (
      <div className="container text-center">
          <img className="mb-4" src="https://www.radiokorea.com/images/news/2017/08/14/265249/1.jpg" alt="" width="72" height="72" />

          <h3>Login</h3>
          <Button color="primary" onClick={this.onLoginButtonClick}>Sign in with Instagram</Button>{' '}

          <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
      </div>
    );
  }
}

export { LoginView };