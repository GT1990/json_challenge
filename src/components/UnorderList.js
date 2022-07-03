//imports
import { useState } from "react";
import ListItem from "./ListItem";
import Button from "./Button";
/**
 * The UnorderedList component takes the json object passed in as props from app.js.
 * The component then either recursively calls itself if there is nested data or passes data to the ListItem component if there is no nested data.
 *
 * @param {object} props -  destructed props passed in from app.js
 * @returns {element} ul - returns data wrapped in <ul> tags if there is nested data and
 * @returns {component} Button - handling button click or
 * @returns {component} ListItem - returns a component if there is no nested data
 */
function UnorderedList({ group, display, property, node }) {
  const [displayState, setDisplayState] = useState([]);
  return (
    <>
      {/* if the node is an object (ie: object or array) that indicates there is nested data */}
      {node &&
      typeof node === "object" &&
      !(Array.isArray(node) && node.length === 0) ? (
        <ul key={`${group}`} className={display ? group : `hidden ${group}`}>
          <Button
            group={group}
            displayState={displayState}
            setDisplayState={setDisplayState}
          />
          <label className={group}>{property} :</label>
          {Object.keys(node).map((property, index) => {
            return (
              <UnorderedList
                key={`${index}`}
                group={group + 1}
                display={displayState.includes(group) ? true : false}
                property={property}
                node={node[property]}
              />
            );
          })}
        </ul>
      ) : (
        <>
          {/* else if the node is not an object (ie: number or string) that indicates we have no nested data and have reached the last branch node in the tree stucture */}
          {
            <ListItem
              group={group}
              display={display ? true : false}
              property={property}
              value={node}
            />
          }
        </>
      )}
    </>
  );
}

export default UnorderedList;
