import React from "react";
import { RiEditLine, RiDeleteBin2Line } from "react-icons/ri";
import MainButton from "./../Elements/MainButton";
import "./Styles/NoteStyles.css"

export const Note = () => {
  return (
    <>
      <div className="note-section">
        <h1 className="title">This is sample note</h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum
          dolorem fuga, blanditiis rerum voluptates saepe sed necessitatibus
          voluptatum amet inventore voluptatibus at eligendi sint.
        </p>
        <div className="note-buttons">
          <MainButton buttonText={<RiEditLine />} />
          <MainButton buttonText={<RiDeleteBin2Line />} />
        </div>
      </div>
    </>
  );
};
