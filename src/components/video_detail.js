import React, { Component } from 'react';

class VideoDetail extends Component {
  render () {
    if (!this.props.video) {
      return <div>Loading...</div>;
    }

    const videoUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
    const snippet = this.props.video.snippet;

    return (
      <div className='video-detail col-md-8'>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe className='embed-responsive-item' src={videoUrl}></iframe>
        </div>
        <div className='details'>
          <div>{snippet.title}</div>
          <div>{snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
