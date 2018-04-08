import React, { Component } from 'react';

export default class AudioPlayer extends Component {
	constructor(props){
		super(props);
	}

 sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

	render(){
		var teste = {};
		var fileName = localStorage.getItem(this.props.idAudio, function(result){console.log(result);teste=result;});
		setTimeout(function(){}, '3000');
		console.log(fileName);
		if (fileName){

		return(
			<section className="sound-return">
				<article className='clip'>
			      	<audio controls='controls' id={this.props.idAudio}>
						<source  src={fileName} type="audio/ogg; codecs=opus" />
			      	</audio>
		      	</article>
	     	</section>
	  );}
		else
			return ("")
	}
}
export {AudioPlayer};