import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => { //const video = props.video; props.onVideoSelect finally here from App!
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (    //select the video - the end of the callback
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={ imageUrl } />
                </div>
                <div className="media-body">
                    <div className="media-heading">{ title }</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;