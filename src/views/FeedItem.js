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
                        <p style={{fontSize:'100%'}}><b>Tainá Turella</b></p>
                        <p style={{fontSize:'80%'}}>Facebook Hack</p>
                    </div>
                </div>
                
                <div style={image_style} className="image_from_insta">
                    <p><img src={require('./infos/37509081-picture.jpg')} alt="pictureImported" className="img-thumbnail"></img></p>
                </div>
                <div className="audio_bar">
                    <p>audio_bar</p>
                </div>
            </div>
        );
    }
}
export { FeedItem };