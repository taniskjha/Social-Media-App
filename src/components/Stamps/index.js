import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../store/AppContext";
import { sec2TimeConvertor } from "../../utils/time";
import { randomIdGenerator } from "../../utils/collection";

const styles = {
  stamps: "flex-1 px-6 truncate",
  container:
    "rounded-md bg-gray-100 p-3 mb-5 hover:bg-gray-200 transition-all duration-200 cursor-pointer",
  wrapper: "flex truncate ",
  time: "flex-shrink-0",
  msg: "ml-3 flex items-center",
  msgTxt: "text-sm font-medium text-gray-800 truncate",
};

const Index = ({ savedBookmarks }) => {
  const { playerRef } = useContext(AppContext);
  const sortedBookmarks = savedBookmarks.sort((a, b) => {
    return a.timestamp - b.timestamp;
  });

  return (
    <span className={styles.stamps}>
      {sortedBookmarks.length
        ? sortedBookmarks.map((bookmark) => (
            <div
              key={randomIdGenerator()}
              onClick={() => {
                playerRef.current.seekTo(bookmark.timestamp);
              }}
              className={styles.container}
            >
              <div className={styles.wrapper}>
                <div className={styles.time}>{`${sec2TimeConvertor(
                  bookmark.timestamp
                )}`}</div>
                <div className={styles.msg}>
                  <p className={styles.msgTxt}>{bookmark.msg}</p>
                </div>
              </div>
            </div>
          ))
        : null}
    </span>
  );
};

export default Index;
