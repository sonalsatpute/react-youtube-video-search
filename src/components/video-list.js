import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) =>{

    const items = props.videos.map( (video) => {
        return(
            <VideoListItem key={video}/>
        );
    });

    return(
        <ul>
            {items}
        </ul>
    );
}

export default VideoList;