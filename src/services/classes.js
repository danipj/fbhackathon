// set up basic variables for app
import axios from "axios";

window.onload = function() {
    var record = document.querySelector('.record');
    var stop = document.querySelector('.stop');
    var soundClips = document.querySelector('.sound-clips');
    var soundReturn = document.querySelector('.sound-return');
    var canvas = document.querySelector('.visualizer');
    var mainSection = document.querySelector('.main-controls');

    var id = this.document.querySelector("input[name='id']").value;
    
    stop.disabled = true;
    // visualiser setup - create web audio api context and canvas
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var canvasCtx = canvas.getContext("2d");
    //main block for doing the audio recording
    if (navigator.mediaDevices.getUserMedia) {
        var constraints = { audio: true };
        var chunks = [];
        var onSuccess = function(stream) {
          var mediaRecorder = new MediaRecorder(stream);
          visualize(stream);
          record.onclick = function() {
            mediaRecorder.start();
            record.style.background = "red";
            stop.disabled = false;
            record.disabled = true;
          }
          stop.onclick = function() {
            mediaRecorder.stop();
            record.style.background = "";
            record.style.color = "";
        // mediaRecorder.requestData();
            stop.disabled = true;
            record.disabled = true;
          }
          mediaRecorder.onstop = function(e) {
            var clipContainer = document.createElement('article');
            var clipLabel = document.createElement('p');
            var audio = document.createElement('audio');
            var deleteButton = document.createElement('button');
            var utilizar_audio = document.createElement( 'button');
            clipContainer.classList.add('clip');
        clipContainer.id='arc'
        audio.setAttribute('controls', '');
        audio.setAttribute('controlsList','nodownload')
    
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        utilizar_audio.textContent='Utilizar';
        utilizar_audio.className = 'utilizar_audio';
  
  
  
        clipContainer.appendChild(audio);
        clipContainer.appendChild(deleteButton);
        clipContainer.appendChild(utilizar_audio);
        soundClips.appendChild(clipContainer);
  
        audio.controls = true;
        var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
        chunks = [];
        var audioURL = window.URL.createObjectURL(blob);
        var filename = audioURL.substring(audioURL.lastIndexOf('/')+1);
        audio.src = audioURL;
        console.log(audioURL);
        console.log("recorder stopped");
  
        deleteButton.onclick = function(e) {
          record.disabled = false;
          window.evtTgt = e.target;
          window.evtTgt.parentNode.parentNode.removeChild(window.evtTgt.parentNode);
        } 
  
  
        utilizar_audio.onclick = function(e) {
          localStorage.setItem(filename, audioURL);

          axios.get("http://localhost:3000/posts/?id="+id)
          .then(function(res){
            console.log(res)

            var post = res.data[0]
            post.audioID = filename
            post.audioUserID = localStorage.getItem("userLoggedID")
            post.audioUserName = localStorage.getItem("userLoggedUserName")
            post.audioUserProfilePicture = localStorage.getItem("userLoggedPicture")

            fetch("http://localhost:3000/posts/"+id,{
                "body": JSON.stringify(post),
                "method": "PUT",
                "headers":{
                "Accept":"application/json",
                "Content-Type":"application/json"
                }
            })

         })
        }
  
        clipLabel.onclick = function() {
          var existingName = clipLabel.textContent;
          var newClipName = prompt('Enter a new name for your sound clip?');
          if(newClipName === null) {
            clipLabel.textContent = existingName;
          } else {
            clipLabel.textContent = newClipName;
          }
        }
      }
  
      mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      }
    }
  
    var onError = function(err) {
      console.log('The following error occured: ' + err);
    }
  
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  
  } else {
     console.log('getUserMedia not supported on your browser!');
  }
  
  function visualize(stream) {
    var source = audioCtx.createMediaStreamSource(stream);
  
    var analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
  
    source.connect(analyser);
    //analyser.connect(audioCtx.destination);
  
    draw()
  
    function draw() {
      window.WIDTH = canvas.width
      window.HEIGHT = canvas.height;
  
      requestAnimationFrame(draw);
  
      analyser.getByteTimeDomainData(dataArray);
  
      canvasCtx.fillStyle = 'rgb(200, 200, 200)';
      canvasCtx.fillRect(0, 0, window.WIDTH, window.HEIGHT);
  
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
  
      canvasCtx.beginPath();
  
      var sliceWidth = window.WIDTH * 1.0 / bufferLength;
      var x = 0;
  
  
      for(var i = 0; i < bufferLength; i++) {
   
        var v = dataArray[i] / 128.0;
        var y = v * window.HEIGHT/2;
  
        if(i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }
  
        x += sliceWidth;
      }
  
      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();
  
    }
  }
  
  function pega_audio(){
      var clipContainerReturn = document.createElement('article');
      var clipLabelReturn = document.createElement('p');
      var audioReturn = document.createElement('audio');
  
      clipContainerReturn.classList.add('clip');
      audioReturn.setAttribute('controls', '');
      audioReturn.setAttribute('controlsList','nodownload')
  
      clipContainerReturn.appendChild(audioReturn);
      soundReturn.appendChild(clipContainerReturn);
  
      audioReturn.controls = true;
      audioReturn.src = localStorage.getItem("foto1");
  
  }
  
  window.onresize = function() {
    canvas.width = mainSection.offsetWidth;
  }
  
  window.onresize();
  
  };