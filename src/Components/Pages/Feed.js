import { useState } from "react";

import Footer from "../Sections/Footer";
import NavBar from "../Sections/NavBar";
import { Note } from "../Sections/Note";
import { NotePopup } from "../Sections/NotePopup";

import { ThemeContext } from "./../../Contexts/ThemeContext";

const Feed = () => {
  // Theme state
  const [theme, setTheme] = useState("light");

  //Popup state
  const [showPopup, setShowPopup] = useState(false);

  //toggle theme
  const toggleTheme = () => {
    //Default theme is light
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  //toggle Popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="feed" id={theme}>
          <NavBar openPopupFunc={togglePopup} />
          <div className="note-area">
            <Note />
            <Note />
            <Note />
            <Note />
          </div>
          <Footer />
          {showPopup && <NotePopup closePopupFunc={togglePopup} />}
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Feed;
