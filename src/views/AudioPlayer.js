import React, { Component } from 'react';

export default class AudioPlayer extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<section className="sound-return">
				<article className='clip'>
			      	<audio controls controlsList='nodownload' id={this.props.idAudio} src={localStorage.getItem(this.props.idAudio)}>
			      	</audio>
		      	</article>
	     	</section>
	  );
	}
}
export {AudioPlayer};