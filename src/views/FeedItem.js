import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

var user_style = {
    margin:'left',
    borderRadius:'999%',
    width:'15%',
    height:'30%',
    float: 'left',
};

var extra_info={
    size:'50%',
    marginLeft:'50px',
    lineHeight:'20%'
}
var image_style={
    width:'100%',
    marginTop:'10%'
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
                        src={this.props.value.path_user_pic}></img></p>
                </div>
                <div style={extra_info}className='extra_info'>
                    <div className="user_name">
                        <p style={{fontSize:'100%'}}><b>{this.props.value.user_name}</b></p>
                        <p style={{fontSize:'80%'}}>{this.props.value.location_pic}</p>
                    </div>
                </div>
                
                <div style={image_style} className="image_from_insta">
                    <p><img src={this.props.value.path_pic} alt="pictureImported" className="img-thumbnail"></img></p>
                </div>
                {
                    this.props.audioID ?
                        <div className="audio_bar">
                            <p>audio_bar</p>
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