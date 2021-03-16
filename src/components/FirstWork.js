import React from 'react';
import YouTube from 'react-youtube';

const FirstWork = () => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return (
        <div>
            <div className="video-flex">
                <YouTube videoId="McBQqEQUNM8" opts={opts}/>
            </div>
        </div>
    )
}

export default FirstWork;