import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./components/footer/VideoFooter"
import VideoSideBar from "./components/sideBar/VideoSideBar";


function Video({likes, messages, shares, name, description, music, url}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={handdleStart}
        loop
        className="video__player"
        src={url}
        
      
      ></video>
      < VideoSideBar 
        likes={likes}
        messages={messages}
        shares={shares}
      />
      <VideoFooter 
        name={name}
        description={description}
        music={music}
      />

    </div>
  );
}

export default Video;
