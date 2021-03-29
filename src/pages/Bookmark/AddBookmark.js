import React, { useContext, useEffect, useState } from "react";
import { useSnackbar } from "react-simple-snackbar";
import Button from "../../components/Buttons";
import FormInput from "../../components/FormInput";
import AppContext from "../../store/AppContext";

const styles = {
  formWrapper: "p-6 flex min-w-full",
  formInput: `border-gray-400 transition-all duration-200 hover:border-gray-500  focus:outline-blue-500 border-2 block w-full p-2 sm:pl-2 text-sm rounded-sm`,
  formButton: `bg-blue-500 text-white font-normal text-sm py-2 px-4 rounded-sm disabled:opacity-50`,
};

const AddBookmark = ({ setVideoPlaying, savedBookmarks, setBookmark }) => {
  const [inputValue, setInputValue] = useState("");
  const [openSnackbar] = useSnackbar();
  const { playerRef } = useContext(AppContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const singleBookmark = {
      timestamp: playerRef.current.getCurrentTime().toString(),
      msg: inputValue,
    };
    if (
      savedBookmarks.find(
        (mark) =>
          mark.timestamp.slice(0, 3) == singleBookmark.timestamp.slice(0, 3)
      )
    ) {
      openSnackbar(
        "This Location is already Bookmarked, Please Try another one"
      );
      setInputValue("");
    } else {
      setBookmark([...savedBookmarks, singleBookmark]);
      setInputValue("");
      setVideoPlaying(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <FormInput
        value={inputValue}
        labelText="Add note"
        placeholder={"Add note here..."}
        type="textArea"
        onChange={handleChange}
        className={styles.formInput}
      />

      <Button
        onClick={handleSubmit}
        disabled={!inputValue.length}
        className={styles.formButton}
        children={`Add Bookmark`}
      />
    </form>
  );
};

export default AddBookmark;
