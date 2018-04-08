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




  render() {
    if(this.state.post && this.state.notification){
      return (
        <div >
          
          <FeedItem key={this.state.post.id} value={{
            user_name: this.state.post.postUserName, 
            path_user_pic: this.state.post.postUserProfilePicture,
            path_pic: this.state.post.imageURL, 
            location_pic: this.state.post.location,
            audio_ID: this.state.post.audioID
          }}            
          />
          <div style={{textAlign:'center'}}>
            <Button color="primary" onClick={this.approveAudio}> Aprovar </Button><p />
            <Button onClick={this.denyAudio}> Excluir </Button>
          </div>
        </div>
      );
    } else {return ("Carregando...")}
  }
}

export { ReviewView };
