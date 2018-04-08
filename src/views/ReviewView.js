import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FeedItem from './FeedItem.js';
import axios from "axios";

export default class ReviewView extends Component {

  constructor(props) {
    super(props);
    const { match: { params } } = this.props;
    this.params = params;

    this.state = {
      post: null,
      notification: null
    }

    this.approveAudio = this.approveAudio.bind(this);
    this.denyAudio = this.denyAudio.bind(this);
  }

  componentDidMount() {
    var _this = this;

    axios.get("http://localhost:3000/notifications/1")
    .then(function(res){
        _this.setState({
          notification: res.data
        });

        axios.get("http://localhost:3000/posts/"+res.data.postID)
        .then(function(response){
            _this.setState({
              post: response.data
            });
        })
    })
  }

  approveAudio() {

    this.state.post.status = "APPROVED";

    fetch("http://localhost:3000/posts/"+this.state.post.id,{
      "body": JSON.stringify(this.state.post),
      "method": "PUT",
      "headers":{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
  }

  denyAudio() {

    this.state.post.status = "DENIED";

    fetch("http://localhost:3000/posts/"+this.state.post.id,{
      "body": JSON.stringify(this.state.post),
      "method": "PUT",
      "headers":{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
  }
<<<<<<< HEAD
=======

>>>>>>> 354eeba5d74b3d79ee48663e052aae9bb5117bca
  render() {
    if(this.state.post && this.state.notification){
      return (
        <div className="container text-center"> 
          <FeedItem key={this.state.post.id} value={{
            user_name: this.state.post.postUserName, 
            path_user_pic: this.state.post.postUserProfilePicture,
            path_pic: this.state.post.imageURL, 
            location_pic: this.state.post.location,
            audio_ID: this.state.post.audioID
          }}            
          />
          <div className="text-center row">
            <div className="col-md-6 col-md-offset-4">
              <Button onClick={this.denyAudio}> Excluir </Button>
            </div>
            <div className="col-md-6 col-md-offset-4">
              <Button color="primary" onClick={this.approveAudio}> Aprovar </Button>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      );
    } else {return ("Carregando...")}
  }
}

export { ReviewView };
