import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClrClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="continer">
        <h1 style={{ Color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "light",
            }}
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClrClick}>
            Clear Text
          </button>
        </div>
      </div>
      <div className="container">
        <h2 style={{ Color: props.mode === "dark" ? "white" : "black" }}>
          your text summary
        </h2>
        <p>
          <b>{text.split(" ").length}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
