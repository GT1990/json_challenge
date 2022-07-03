import { useState } from "react";
import ListItem from "./ListItem";

import handleDropDownToggle from "./handleDropDownToggle";

function UnorderedList({ group, display, property, node, level }) {
  const [displayState, setDisplayState] = useState([]);
  return (
    <>
      {node &&
      typeof node === "object" &&
      !(Array.isArray(node) && node.length === 0) ? (
        <ul
          key={`${group}${level}`}
          className={display ? group : `hidden ${group}`}
        >
          <button
            className={displayState.includes(group) ? `rotate ${group}` : group}
            onClick={() => handleDropDownToggle(group, setDisplayState)}
          >
            {">"}
          </button>
          <label className={group}>{property} :</label>
          {Object.keys(node).map((property, index) => {
            return (
              <UnorderedList
                key={`${index}${level}`}
                group={group + 1}
                display={displayState.includes(group) ? true : false}
                property={property}
                node={node[property]}
                level={++level}
              />
            );
          })}
        </ul>
      ) : (
        <>
          {Array.isArray(node) && node.length === 0 ? (
            <ListItem
              group={group}
              display={display ? true : false}
              property={property}
              value={"[ ]"}
              level={++level}
            />
          ) : (
            <ListItem
              group={group}
              display={display ? true : false}
              property={property}
              value={node}
              level={++level}
            />
          )}
        </>
      )}
    </>
  );
}

export default UnorderedList;
