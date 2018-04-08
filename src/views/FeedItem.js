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
        margin:'12px'
    }
  var image_style={
    width:'100%',
  }

export default class FeedItem extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div className='feed_item'>
                <div className="user_icon">
                    <p><img style={user_style} alt="userIcon" src={require('./infos/perfil.jpg')}></img></p>
                </div>
                <div style={extra_info}className='extra_info'>
                    <div className="user_name">
                        <p style={{fontSize:'80%'}}>Tainá Turella</p>
                    </div>
                    <div className="image_place">
                        <p style={{fontSize:'80%'}}>Facebook Hack</p>
                    </div>
                    <div className="sharing_options">
                        <p>sharing_options</p>
                    </div>
                </div>
            <div className="image_from_insta">
                <p><img style={image_style}src={require('./infos/37509081-picture.jpg')} alt="pictureImported" className="img-thumbnail"></img></p>
            </div>
            <div className="audio_bar">
                <p>audio_bar</p>
            </div>
        </div>
    );
    }
}
export { FeedItem };