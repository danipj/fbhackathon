import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from "prop-types";

export default class LoginView extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

  constructor(props, context) {
    super(props, context);

    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
  }

  onLoginButtonClick(){
      window.OAuth.initialize('Y9Xb9oKFDroP5k_SY5Dxtdp1OOI');

      window.OAuth.popup('instagram').done(function(result) {      
      
      /*
        save user session
      */
      localStorage.setItem("userLogged", result.user);
      localStorage.setItem("userLoggedID", result.user.id);
      localStorage.setItem("accessToken", result.access_token);
      localStorage.setItem("userLoggedUserName", result.user.username);
      localStorage.setItem("userLoggedPicture", result.user.profile_picture);

      /*
        Save user to database
      */
      var create = true;
      fetch("http://localhost:3000/users/",{
        "method": "GET"
      }).then((response) => {
          response.json().then(users => {
            
            //Check if user already exists
            users.map(function(u){

              // if exists, update data
              if(u.id==result.user.id){
                create = false;
                // fetch("http://localhost:3000/users/"+u.id,{
                //   "body": JSON.stringify(result.user),
                //   "method": "PUT",
                //   "headers":{
                //     "Accept":"application/json",
                //     "Content-Type":"application/json"
                //   }
                // }).then((response) => console.log(response.json()))
              }
            })

            // if doesnt exists, create new user
            if(create){
              fetch("http://localhost:3000/users/",{
                "body": JSON.stringify(result.user),
                "method": "POST",
                "headers":{
                  "Accept":"application/json",
                  "Content-Type":"application/json"
                }
              }).then((response) => console.log(response.json()))
            }
          })
      })

      /*
        redirect
      */
    });
    this.context.router.history.push("/");
  }

  render() {
    if(localStorage.getItem("accessToken")){
      this.context.router.history.push('/');
    }
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