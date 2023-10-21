import React from "react";
interface props {
  caption: string;
  css: string;
  onClicked: () => void;
}

function Button({ caption, css, onClicked }: props) {
  return (
    <>
      <button
        className={"btn btn-" + css}
        onClick={() => {
          onClicked();
        }}
      >
        {caption}
      </button>
    </>
  );
}

export default Button;
