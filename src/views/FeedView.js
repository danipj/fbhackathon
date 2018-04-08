import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FeedItem from './FeedItem.js';

var content_feed={
  margin:'auto',
  width:'50%'
}

var posts=[{user_name:'Tainá Turella', path_user_pic:'./infos/perfil.jpg',
          path_pic:'./infos/37509081-picture.jpg', location_pic:'Facebook Hack'}]

export default class FeedView extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div style={content_feed} className="content_feed">
        <FeedItem/>
        <FeedItem/>
        <FeedItem/>
      </div>
    );
  }
}

export { FeedView };
