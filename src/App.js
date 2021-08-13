import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearcParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearcParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// const animals = [
//   { name: "Luna", animal: "Dog", breed: "Havanese" },
//   {
//     name: "Pepper",
//     animal: "Bird",
//     breed: "Cockatiel",
//   },
//   {
//     name: "Sudo",
//     animal: "Dog",
//     breed: "Wheaten Terrier",
//   },
// ];
