import "./styles.css";
import { useState } from "react";

var flagDictionary = {
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🏳": "White Flag",
  "🏳‍🌈": "Rainbow Flag",
  "🏳️‍⚧️": "Transgender Flag",
  "🏴‍☠️": "Pirate Flag"
};

var flagArray = Object.keys(flagDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function flagInputHandler(event) {
    var flagInput = event.target.value;
    var meaning = flagDictionary[flagInput];
    if (flagInput in flagDictionary) {
      setMeaning(meaning);
    } else if (flagInput === "") {
      meaning = "";
      setMeaning(meaning);
    } else {
      meaning = "sorry we don't have this in our database, try something else";
      setMeaning(meaning);
    }
  }

  function flagClickHandler(flag) {
    var meaning = flagDictionary[flag];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "#9CA3AF",
          padding: "2rem",
          fontWeight: "bold",
          fontSize: "1.5rem"
        }}
      >
        Flag Identifier
      </nav>
      <h2 style={{ marginTop: "3rem" }}>
        Put a flag emoji here👇 to know its meaning
      </h2>

      <input
        onChange={flagInputHandler}
        style={{
          fontSize: "1.5rem",
          height: "7vh",
          border: "1px solid black"
        }}
      ></input>

      <div
        style={{ paddingTop: "1rem", fontWeight: "bold", fontSize: "larger" }}
      >
        {meaning}
      </div>

      <h3>click on flag to know its meaning</h3>

      {flagArray.map(function flagDisplay(flag) {
        return (
          <span
            onClick={() => flagClickHandler(flag)}
            key={flag}
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}
