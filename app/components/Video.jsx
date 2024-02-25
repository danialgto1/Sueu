/** @format */
import Image from "next/image";
import { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
function VidPre() {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const [size, setSize] = useState({
    width: 1000,
    height: 600,
  });
  useEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const opts = {
    height: size?.width / 2.5 || 200,
    width: size?.width - 400 || 200,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="  flex m-6  justify-center">
      <div className=" relative   w-full">
        <Image
          className=" -z-10"
          src="/svgs/Background.svg"
          alt="bg"
          layout="fill"
        />
        <div className="flex justify-center ">
          <div className=" flex w-fit justify-center rounded-3xl overflow-clip">
            <YouTube
              videoId="occycDAXmAA"
              opts={opts}
              onReady={onPlayerReady}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VidPre;
