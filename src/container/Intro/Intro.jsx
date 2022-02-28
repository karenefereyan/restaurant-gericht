import React, { useState, useRef } from 'react';
import { meal }  from '../../constants';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import './Intro.css';

const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const handleVideo = () => {

    /** Dynamic previous value to set new value */
        setPlayVideo((prevPlayVideo) => !prevPlayVideo);

        if(playVideo){
          videoRef.current.pause();
        }
        else{
          videoRef.current.play();
        }
  };

  return (
    <div className='app__video'>
         <video 
            src = {meal}
            ref = {videoRef}
            type="video/mp4"
            controls = {false}
            loop
            muted
         />
         <div className='app__video-overlay flex__center'>
            <div className='app__video-overlay_circle flex__center' 
            onClick = { handleVideo} >
              {
                playVideo 
                ? (
                  <BsPauseFill fontSize={30} color='#fff' />
                ): 
                (
                <BsFillPlayFill fontSize={30} color='#fff' />
                )
              }
              
            </div>
        </div>
    </div>
 
)
}

export default Intro;
