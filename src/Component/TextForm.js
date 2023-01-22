import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log("Uppercase was Clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","Success");
  };
  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","Success");
  };
  const handleClearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Clear","Success");
  };
  const handleCopy = () => {
    console.log("Copy Done")
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is Copy on Clipboard","Success");
  };
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Space Removed","Success");
  }
  const handleonChange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   setText("new text");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          CopyText
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container" my-3>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
