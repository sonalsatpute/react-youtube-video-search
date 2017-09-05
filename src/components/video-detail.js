import React from 'react';

const VideoDetail = ({video}) => {

    if (!video){
        return (
            <div>Loading... .. .</div>
        );
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="col-mid-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embeb-responsive-item" src={url}></iframe>
            </div>

            <div className="page-header">
                <h2>{video.snippet.title }</h2>
                <h4>{video.snippet.description}</h4>
            </div>
        </div>
    );
}

export default VideoDetail;