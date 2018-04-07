import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export default class NotificationView extends Component {

  constructor() {
    super();
  }

  render() {
    return (<div>
	    		<div style={{textAlign:'center'}}><h2>Notifications</h2></div>
	    		<ListGroup style={{margin:'30px'}}>
	          		<ListGroupItem tag="button" action>Fulano sugeriu um audio para sua foto<Button style={{float:'right'}}>Avaliar</Button></ListGroupItem>
	          		<ListGroupItem tag="button" action>Fulano sugeriu um audio para sua foto<Button style={{float:'right'}}>Avaliar</Button></ListGroupItem>
			        <ListGroupItem tag="button" action>Ciclano sugeriu um audio para sua foto<Button style={{float:'right'}}>Avaliar</Button></ListGroupItem>
			        <ListGroupItem tag="button" action>Fulano sugeriu um audio para sua foto<Button style={{float:'right'}}>Avaliar</Button></ListGroupItem>
	          	</ListGroup>
            </div>
          );
  }
}

export { NotificationView };