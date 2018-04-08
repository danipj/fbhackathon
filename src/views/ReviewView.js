import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FeedItem from './FeedItem.js';

export default class ReviewView extends Component {

  constructor(props) {
    super(props);
    const { match: { params } } = this.props;
    this.params = params;
  }

  render() {
    return (<div>
              <FeedItem value='teste' />
              <div style={{textAlign:'center'}}>
              {this.params.id}
                <Button> Aprovar </Button>
                  <p />
                <Button> Excluir </Button>
              </div>
            </div>
          );
  }
}

export { ReviewView };