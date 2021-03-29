import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import ContentLoader from "../../components/ContentLoader";
import Navbar from "../../components/Navbar";
import Stamps from "../../components/Stamps";
import VideoPlayer from "../../components/VideoPlayer";
import { DEFAULT_VIDEO_URL } from "../../utils/constant";
import AddBookmark from "./AddBookmark";
import ChangeVideo from "./ChangeVideo";
import Layout from "./Layout";

const styles = {
  videoContainer: "bg-white min-h-96",
  videoWrapper: "mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2",
  videoInner: "flex flex-col",
  stampsInner: "flex",
};

const Index = () => {
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [savedBookmarks, setBookmark] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let urlParams = new URLSearchParams(window.location.search).get("url");
    if (urlParams != null && urlParams.length) {
      setVideoUrl(urlParams);
    } else {
      setVideoUrl(DEFAULT_VIDEO_URL);
    }
  }, []);

  const mimicApiCallLoading = setTimeout(() => {
    setLoader(false);
  }, 3000);

  useEffect(() => {
    return () => clearTimeout(mimicApiCallLoading);
  }, []);

  return (
    <Layout>
      <main className={styles.videoContainer}>
        <Navbar src={'https://reactexpert-io.vercel.app/static/media/logo.1f00fece.png'} logotxt="Bookmarking Application" />
        {loader ? (
          <ContentLoader />
        ) : (
          <section className={styles.videoWrapper}>
            <div className={styles.videoInner}>
              <VideoPlayer
                src={videoUrl}
                videoPlaying={videoPlaying}
                setVideoPlaying={setVideoPlaying}
              />
              
              <AddBookmark
                setVideoPlaying={setVideoPlaying}
                savedBookmarks={savedBookmarks}
                setBookmark={setBookmark}
              />
              <ChangeVideo
                setVideoUrl={setVideoUrl}
                setLoader={setLoader}
                setBookmark={setBookmark}
              />
            </div>
            <div className={styles.stampsInner}>
              <Stamps savedBookmarks={savedBookmarks} />
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
};

export default Index;
