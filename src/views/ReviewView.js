import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FeedItem from './FeedItem.js';

export default class ReviewView extends Component {

  constructor(props) {
    super(props);
    const { match: { params } } = this.props;
    this.params = params;
  }

  pega_audio(idfoto){
    return (<article className='clip'>
      <audio controls controlsList='nodownload' id={idfoto} src={localStorage.getItem(idfoto)}>
      </audio></article>);
  }


  render() {
    return (<div>
              <FeedItem value='teste' />
              <div style={{textAlign:'center'}}>
              <section class="sound-return">
              {this.pega_audio('foto1')}
            </section>
                <Button> Aprovar </Button>
                  <p />
                <Button> Excluir </Button>
              </div>
            </div>
          );
  }
}

export { ReviewView };