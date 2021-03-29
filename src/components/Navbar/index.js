import React from "react";

const styles = {
  navContainer: `flex items-center justify-center w-full border-b-2 py-6 mb-8`,
  logoContainer: `flex`,
  logo: `h-10 w-10 mr-3`,
  logoText: `text-3xl font-semibold`,
};

const Navbar = (props) => {
  const { src, alt, logotxt } = props;
  return (
    <nav className={styles.navContainer}>
      {src && (
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={src} alt={alt} />
          <p className={styles.logoText}>{logotxt}</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
