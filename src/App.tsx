import { useState } from "react";

import reactLogo from "./assets/react.svg";
import Button from "../components/Button";
//testing comment
function App() {
  return (
    <>
      <div className="container">
        <Button
          css="primary"
          caption="Hello World"
          onClicked={() => {
            console.log("hello world");
          }}
        />
      </div>
    </>
  );
}

export default App;
