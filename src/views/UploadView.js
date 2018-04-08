import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../App.css';
import '../services/mediaDevices-getUserMedia-polyfill.js';

var content={
    margin:'auto',
    marginTop:'10%',
    width:'50%',
   
}

class UploadView extends Component {

    constructor(props) {
        super(props);
        const { match: { params } } = this.props;
        this.params = params;
    }

    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <section className="main-controls">
                        <div style={content} className="content">
                        <canvas className="visualizer"></canvas>
                        </div>
                        <div id="buttons">
                            <button style={{width:'40px', borderRadius:'100%', background:'#FFF'}}
                            className="record"><img style={{width:'100%', height:'10%'}}
                            src={require("../mic.png")} alt="mic" /></button>

                            <button style={{width:'40px', borderRadius:'100%', background:'#FFF'}}
                            className="stop"><img style={{width:'100%', height:'10%'}}
                            src={require("../stop.png")} alt="mic" /></button>
                        </div>
                        <input name="id" type="hidden" value={this.params.id} />
                    </section>
                    <section className="sound-clips"></section>
                </div>
                <script src={require("../services/classes.js")}></script>
            </div>
        );
    }
}

export{UploadView};