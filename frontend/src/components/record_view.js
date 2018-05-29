import React from 'react';
import ReactMediaRecorder from "react-media-recorder";

class RecordView extends React.Component {

  // componentDidMount(){
  //   let start = document.getElementById('hello')
  //   console.log(start);
  //   start.addEventListener('click', () => {
  //     console.log("hello");
  //   })
  // }

  renderVideo = () => {
    return (
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording, mediaBlob }) => (
                  <div>
                    <p>{status}</p>
                    <button onClick={startRecording}>Start Recording</button>
                    <button onClick={stopRecording}>Stop Recording</button>
                    <video src={mediaBlob} controls />
                  </div>
                )}
      />
    )
  }
  render() {
    return (
      <div>
        {this.renderVideo()}
      </div>
    )
  }
}

export default RecordView;
