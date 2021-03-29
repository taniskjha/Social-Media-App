import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { useSnackbar } from "react-simple-snackbar";
import AppContext from "../../store/AppContext";

const styles = {
  videoPlayerContainer: "px-6 min-w-full",
  videoPlayer: "max-w-5xl border-2	 border-gray-300 bg-gray-100 px-0",
};

const Index = ({ src, videoPlaying, setVideoPlaying }) => {
  const { playerRef } = useContext(AppContext);
  const [openSnackbar] = useSnackbar();

  return (
    <section className={styles.videoPlayerContainer}>
      <ReactPlayer
        className={styles.videoPlayer}
        width={"100%"}
        ref={playerRef}
        playing={videoPlaying}
        volume={1}
        controls={true}
        progressInterval={1000}
        url={src}
        loop={true}
        playsinline={true}
        onPlay={() => {
          setVideoPlaying(true);
        }}
        muted={true}
        onError={() => {
          openSnackbar("Something went wrong, Please check the Url");
        }}
      />
    </section>
  );
};

export default Index;
