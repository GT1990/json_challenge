import { useState } from "react";
import UnorderedList from "./components/UnorderList";
import data from "./challenge-data.json";

import "./css/global.css";

function App() {
  const [display, setDisplay] = useState(false);
  console.log(data);
  const handleOpenDropDown = () => {
    console.log("handler");
    setDisplay(true);
  };
  return data && typeof data === "object" ? (
    Object.keys(data).map((property, index) => {
      const node = data[property];
      return (
        <ul key={index}>
          <button onClick={() => handleOpenDropDown()}>{">"}</button>
          <span>{"{ "}</span>
          <label>{property} :</label>
          <UnorderedList
            display={display}
            property={property}
            node={node}
            level={1}
          />
          <span>{" }"}</span>
        </ul>
      );
    })
  ) : (
    <p>The data needs to be an object</p>
  );
}
export default App;
