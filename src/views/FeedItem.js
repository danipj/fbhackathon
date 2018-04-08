import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { AudioPlayer } from './AudioPlayer';
import PropTypes from "prop-types";

var user_style = {
    borderRadius:'999%',
    height:'80px',
    float: 'left',
};

var extra_info={
    marginLeft:'3.3%',
    size:'50%',
    lineHeight:'20%',
    display: 'inline-block'
}
var image_style={
    width:'100%',
    marginTop:'10px'
}

export default class FeedItem extends Component {

    static contextTypes = {
    router: PropTypes.object
    }
    
    constructor(props, context){
        super(props, context);

        this.redirectToUpload = this.redirectToUpload.bind(this)
    }
    
    redirectToUpload(){
        this.context.router.history.push('/upload/'+this.props.value.id);
    }

    render(){
        return(
            <div className='feed_item'>
                <div className="user_icon">
                    <p><img style={user_style} alt="userIcon" 
                        src={this.props.value.path_user_pic} /></p>
                </div>
                <div style={extra_info} className='extra_info'>
                    <div className="user_name">
                        <p style={{fontSize:'100%'}}><b>{this.props.value.user_name}</b></p>
                        <p style={{fontSize:'75%'}}>{this.props.value.location_pic}</p>
                        <Button color="primary" onClick={()=>this.redirectToUpload()}> Upload </Button><p />
                    </div>
                </div>
                
                <div style={image_style} className="image_from_insta">
                    <p><img src={this.props.value.path_pic} alt="pictureImported" className="img-thumbnail"></img></p>
                 </div>
                {
                    this.props.value.audio_ID ?
                        <div className="audio_bar">
                            <AudioPlayer idAudio={this.props.value.audio_ID}/>
                        </div> 
                        : 
                        ''
                }
            </div>
        );
    }
}
export { FeedItem };