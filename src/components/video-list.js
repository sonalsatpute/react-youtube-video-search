import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) =>{

    const items = props.videos.map( (video) => {
        return(
            <VideoListItem 
                key={video.etag} 
                video={video}
                onVideoSelect={props.onVideoSelect}
            />
        );
    });

    return(
        <ul className="col-md-8">
            {items}
        </ul>
    );
}

export default VideoList;