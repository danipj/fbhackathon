import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FeedItem from './FeedItem.js';
import axios from "axios";
import PropTypes from "prop-types";

var content_feed={
  margin:'auto',
  width:'50%'
}

var posts=[{user_name:'Tainá Turella', path_user_pic:'./infos/perfil.jpg',
          path_pic:'./infos/37509081-picture.jpg', location_pic:'Facebook Hack'},
          {user_name:'Peste', path_user_pic:'./infos/perfil.jpg',
          path_pic:'./infos/37509081-picture.jpg', location_pic:'Facebook H'},
          {user_name:'Nat', path_user_pic:'./infos/perfil.jpg',
          path_pic:'./infos/37509081-picture.jpg', location_pic:'Facebook'},
          {user_name:'Camis', path_user_pic:'./infos/perfil.jpg',
          path_pic:'./infos/37509081-picture.jpg', location_pic:' Hack'}]

export default class FeedView extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

  constructor(props,context) {
    super(props,context);

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    var _this = this;
    var accessToken = localStorage.getItem("accessToken")
    if(accessToken){
      axios.get("https://api.instagram.com/v1/media/search?lat=-22.822&lng=-47.08&access_token="+accessToken)
      .then(function(res){
        _this.setState({
          items: res.data
        });
      })
      .catch(function(e) {
        console.log("ERROR ", e);
    })
    }
  }

  render() {
    var feedItems = [];

    if(!localStorage.getItem("accessToken")){
      this.context.router.history.push('/login');
    }

    if(this.state.items && this.state.items.data){
    for (var i = this.state.items.data.length - 1; i >= 0; i--) {
      console.log(i)
      feedItems.push(<FeedItem key={i} value={{
        user_name: this.state.items.data[i].user.username, 
        path_user_pic: this.state.items.data[i].user.profile_picture,
        path_pic: this.state.items.data[i], 
        location_pic:'Facebook Hack'}} 
      />);
    }
    return (
      <div style={content_feed} className="content_feed">
      JHGJGFTFT  
        {feedItems}
      </div>
    );
  } else {return ("Carregando esta merda")}}
}

export { FeedView };
