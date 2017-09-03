import React from 'react';

const VideoListItem = ({video}) =>{
    return (
        <div>{video.snippet.title}</div>
    );
}

export default VideoListItem;