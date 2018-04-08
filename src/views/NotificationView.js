import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import PropTypes from "prop-types";

export default class NotificationView extends Component {
	static contextTypes = {
    	router: PropTypes.object
  	}

  constructor(props,context) {
    super(props,context);
  }

  render() {
  	let id = 0;
    return (<div>
	    		<div style={{textAlign:'center'}}><h2>Notifications</h2></div>
	    		<ListGroup style={{margin:'30px'}}>
	          		<ListGroupItem tag="button" action onClick={()=>this.context.router.history.push("/review/"+id)}>
	          			Fulano sugeriu um audio para sua foto
	          			<Badge style={{float:'right'}}>Avaliar</Badge>
	          		</ListGroupItem>
	          	</ListGroup>
            </div>
          );
  }
}

export { NotificationView };