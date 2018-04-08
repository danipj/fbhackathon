import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import PropTypes from "prop-types";
import axios from "axios";

export default class NotificationView extends Component {
	static contextTypes = {
    	router: PropTypes.object
  	}

  constructor(props,context) {
		super(props,context);
		
		this.state = {
      items: []
    }
	}
	
	componentDidMount() {
		var _this = this;
		
		var userID = localStorage.getItem("userLoggedID");

    axios.get("http://localhost:3000/notifications/?userID="+userID)
    .then(function(res){
			_this.setState({
        items: res.data
      });
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }

  render() {
		let id = 0;
		
		var notifications = [];

    if(this.state.items){

			for (var i = this.state.items.length - 1; i >= 0; i--) {
				notifications.push(
					<ListGroupItem key={this.state.items[i].notificationID} tag="button" action onClick={()=>this.context.router.history.push("/review/"+this.state.items[i].notificationID)}>
							{this.state.items[i].text}
							<Badge style={{float:'right'}}>Avaliar</Badge>
					</ListGroupItem>
				)
			}

			return(
				<div>
					<div style={{textAlign:'center'}}><h2>Notifications</h2></div>
						<ListGroup style={{margin:'30px'}}>
						{notifications}	
						</ListGroup>
				</div>
			)

		} else {return ("Carregando...")}
	}
}

export { NotificationView };