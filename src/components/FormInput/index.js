import React from "react";

const styles = {
  inputContainer: "flex-1 mr-4 sm:flex-col",
};

const Index = ({ type, onChange, placeholder, className, value }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        value={value}
        name="input-form"
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Index;
