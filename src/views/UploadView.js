import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../App.css';
import '../services/mediaDevices-getUserMedia-polyfill.js';

var content={
    margin:'auto',
    width:'50%',
   
}

class UploadView extends Component {
    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <section className="main-controls">
                        <div style={content} className="content">
                        <canvas className="visualizer"></canvas>
                        </div>
                        <div id="buttons">
                            <Button className="record">Record</Button>
                            <p />
                            <Button className="stop">Stop</Button>
                        </div>
                        <input name="id" type="hidden" value="1" />
                    </section>
                    <section className="sound-clips"></section>
                </div>
                <script src={require("../services/classes.js")}></script>
            </div>
        );
    }
}

export{UploadView};