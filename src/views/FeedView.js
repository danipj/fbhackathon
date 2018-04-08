import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FeedItem from './FeedItem.js';
import axios from "axios";
import PropTypes from "prop-types";


var content_feed={
  margin:'auto',
  width:'50%'
}

var profiles_pictures = {
  "danipj_":"https://scontent.cdninstagram.com/vp/fe2b8aa990361091f1ae0676ed446ca7/5B7268CC/t51.2885-19/11821804_301715719952046_1483107061_a.jpg",
  "natalhuda":"https://scontent.cdninstagram.com/vp/3bcb264b54268b19c34cbbc58b5d5d79/5B698204/t51.2885-19/s150x150/23594273_313382155808348_6303847075138240512_n.jpg",
  "basquetefcem":"https://scontent.cdninstagram.com/vp/188a4e376718aa58dccd0d88c911c85c/5B5E4AF2/t51.2885-19/s150x150/12965275_1153591581326551_1976347019_a.jpg"
}

export default class FeedView extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

  constructor(props,context) {
    super(props,context);

    this.state = {
      items: [],
      audios: []
    }
  }

  componentDidMount() {
    var _this = this;
    var accessToken = localStorage.getItem("accessToken")
    if(accessToken){
    axios.get("https://api.instagram.com/v1/media/search?lat=-22.822&lng=-47.08&distance=5000&access_token="+accessToken)
    .then(function(res){
      _this.setState({
        items: res.data
      });
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })

    axios.get("http://localhost:3000/posts/?status=APPROVED")
    .then(function(res){

      var temp = [];

      res.data.map((audio) => {
        temp.push({instagramID: audio.instagramID, audioID: audio.audioID })
      })

      _this.setState({
        audios: temp
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

    if(this.state.items && this.state.items.data && this.state.audios){
      for (var i = this.state.items.data.length - 1; i >= 0; i--) {
        
        feedItems.push(<FeedItem key={i} value={{
          user_name: this.state.items.data[i].user.username, 
          path_user_pic: profiles_pictures[this.state.items.data[i].user.username],
          path_pic: this.state.items.data[i].images.standard_resolution.url, 
          location_pic: this.state.items.data[i].location ? this.state.items.data[i].location.name : "",
          audio_ID: this.state.audios[this.state.items.data[i].id]
        }}            
        />);
    }
    return (
      <div style={content_feed} className="content_feed">
        {feedItems}
      </div>
    );
  } else {return ("Carregando...")}}
}

export { FeedView };
