import React, { Component } from 'react';

class VideoListItem extends Component {
  render () {
    const video = this.props.video;
    const onVideoSelect = this.props.onVideoSelect;
    const snippet = video.snippet;

    return (
      <li className='list-group-item'  onClick={() => onVideoSelect(video)}>
        <div className='video-list media'>
          <div className='media-left'>
            <img src={snippet.thumbnails.default.url} className='media-object' />
          </div>
          <div className='media-body'>
            <div className='media-heading'>{snippet.title}</div>
          </div>
        </div>
      </li>
    );
  };
}

export default VideoListItem;
