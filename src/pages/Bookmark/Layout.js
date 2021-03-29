import React from "react";

const styles = {
  layoutWrapper: `sm:p-8 bg-gray-100 min-h-screen`,
};

const Layout = ({ children }) => {
  return <div className={styles.layoutWrapper}>{children}</div>;
};

export default Layout;
