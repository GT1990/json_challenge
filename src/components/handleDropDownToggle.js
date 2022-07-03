/**
 * The handleDropDownToggle function adds the group number to state which is used for hidding or displaying nested elements.
 *
 * @param {number} group - the group number that we are adding the the display state
 * @param {function} setDisplayState - reference to the useState hook setter method
 */
const handleDropDownToggle = (group, setDisplayState) => {
  setDisplayState((prevState) => {
    if (prevState.includes(group)) {
      //remove it
      return prevState.filter((value) => value !== group);
    } else {
      // add it
      return [...prevState, group];
    }
  });
};

export default handleDropDownToggle;
