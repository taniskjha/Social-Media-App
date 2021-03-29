import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Buttons";
import FormInput from "../../components/FormInput";

const styles = {
  formWrapper: "px-6 pb-6 flex min-w-full",
  formInput: `border-gray-400 transition-all duration-200 hover:border-gray-500  focus:outline-blue-500 border-2 block w-full p-2 sm:pl-2 text-sm rounded-sm`,
  formButton: `bg-blue-500 text-white font-normal text-sm py-2 px-4 rounded-sm disabled:opacity-50`,
};

const AddBookmark = ({ setVideoUrl, setLoader, setBookmark }) => {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setVideoUrl(inputValue);
    setInputValue("");
    setBookmark([]);
    setLoader(true);
  };

  useEffect(() => {
    if (inputValue.length) {
      history.push({
        pathname: "/video-bookmark",
        search: `?url=${inputValue}`,
      });
    }
  }, [inputValue]);

  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <FormInput
        value={inputValue}
        placeholder={"Add Url here..."}
        type="text"
        onChange={handleChange}
        className={styles.formInput}
      />

      <Button
        onClick={handleSubmit}
        disabled={!inputValue.length}
        className={styles.formButton}
        children={`Change Video..`}
      />
    </form>
  );
};

export default AddBookmark;
