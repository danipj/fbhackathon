import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { AudioPlayer } from './AudioPlayer';

var user_style = {
    borderRadius:'999%',
    height:'80px',
    float: 'left',
};

var extra_info={
    size:'50%',
    lineHeight:'20%'
}
var image_style={
    width:'100%',
    marginTop:'10px'
}

export default class FeedItem extends Component {
    
    constructor(props){
        super(props);
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
                        <p style={{fontSize:'80%'}}>{this.props.value.location_pic}</p>
                        <button className='btn'>
                        <img src="/open-iconic/svg/icon-name.svg" alt="icon name"/>
                        </button>
                    </div>
                </div>
                
                <div style={image_style} className="image_from_insta">
                    <p><img src={this.props.value.path_pic} alt="pictureImported" className="img-thumbnail"></img></p>
                </div>
                {
                    this.props.audioID ?
                        <div className="audio_bar">
                            <AudioPlayer idAudio={this.props.audioID}/>
                        </div> 
                        : 
                        <div className="audio_bar">
                            <p>request_audio</p>
                        </div> 
                }
            </div>
        );
    }
}
export { FeedItem };