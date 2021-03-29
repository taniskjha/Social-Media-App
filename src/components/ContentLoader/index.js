import React from "react";
import useResponseive from "../../hooks/useResponsive";

const styles = {
  loaderContainer: "mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2",
  loaderWrapper: "flex flex-col",
  loaderCard: "shimmer shimmer-card",
  loaderStamps: "shimmer shimmer-stamp",
  loaderInput: "shimmer shimmer-input",
};

const Loading = () => {
  const { isMobile } = useResponseive();

  return (
    <section>
      {!isMobile ? (
        <div className={styles.loaderContainer}>
          <div className={styles.loaderWrapper}>
            <div className={styles.loaderCard}></div>
            <div className={styles.loaderInput}></div>
            <div className={styles.loaderInput}></div>
          </div>
          <div className={styles.loaderWrapper}>
            <div className={styles.loaderStamps}></div>
            <div className={styles.loaderStamps}></div>
            <div className={styles.loaderStamps}></div>
            <div className={styles.loaderStamps}></div>
            <div className={styles.loaderStamps}></div>
            <div className={styles.loaderStamps}></div>
            <div className={styles.loaderStamps}></div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default Loading;
