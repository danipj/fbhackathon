import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class NotificationView extends Component {

  constructor() {
    super();
  }

  render() {
    return (<div>
	    		<h1>Notifications</h1>
	    		<ListGroup>
	          		<ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
	          		<ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
			        <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
			        <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
	          	</ListGroup>
            </div>
          );
  }
}

export { NotificationView };