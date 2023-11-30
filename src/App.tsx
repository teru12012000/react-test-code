import React from "react";
import logo from "./logo.svg";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("onClick")}>
        <p>Button</p>
      </Button>
    </div>
  );
}

export default App;
