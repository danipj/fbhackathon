import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class NotificationView extends Component {

  constructor() {
    super();
  }

  render() {
    return (<div>
	    		<h1>Notifications</h1>
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