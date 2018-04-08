import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FeedItem from './FeedItem.js';

var content_feed={
  margin:'auto',
  width:'50%'
}

export default class FeedView extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      //For each image that we will recieve we need to put inside the same template of displaying
      <div style={content_feed} className="content_feed">
        <FeedItem/>
      </div>
    );
  }
}

export { FeedView };
