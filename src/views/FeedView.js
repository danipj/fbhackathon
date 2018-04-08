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
      items: []
    }
  }

  componentDidMount() {
    var _this = this;
    var accessToken = localStorage.getItem("accessToken")
    if(accessToken){

    axios.get("http://localhost:3000/posts/")
    .then(function(res){
      _this.setState({
        items: res.data
      });
    })

    axios.get("https://api.instagram.com/v1/media/search?lat=-22.822&lng=-47.08&distance=5000&access_token="+accessToken)
     .then(function(res){

        res.data.data.map((item, index) => {
          
          axios.get("http://localhost:3000/posts/?instagramID="+item.id)
            .then(function(res1){
              if(res1.data.length){

              }
              else{
                var new_record = {
                  audioID :0,
                  audioUserID :0,
                  audioUserName:null,
                  audioUserProfilePicture:null,
                  id:index,
                  imageURL: item.images.standard_resolution.url,
                  instagramID: item.id,
                  postUserID: item.user.id,
                  postUserName: item.user.username,
                  postUserProfilePicture:profiles_pictures[item.user.username],
                  status:"",
                }

                fetch("http://localhost:3000/posts/",{
                  "body": JSON.stringify(new_record),
                  "method": "POST",
                  "headers":{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                  }
                })                
              }
            })           
        })
      })
    }
  }

  render() {
    var feedItems = [];

    if(!localStorage.getItem("accessToken")){
      this.context.router.history.push('/login');
    }

    if(this.state.items && this.state.items.length){
      for (var i = this.state.items.length - 1; i >= 0; i--) {
        
        feedItems.push(<FeedItem key={i} value={{
          id: this.state.items[i].id,
          instagramID: this.state.items[i].instagramID, 
          user_name: this.state.items[i].postUserName, 
          path_user_pic: this.state.items[i].postUserProfilePicture,
          path_pic: this.state.items[i].imageURL, 
          audio_ID: this.state.items[i].audioID
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
