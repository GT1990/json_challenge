const handleDropDownToggle = (index, setDisplayState) => {
  setDisplayState((prevState) => {
    if (prevState.includes(index)) {
      //remove it
      return prevState.filter((value) => value !== index);
    } else {
      // add it
      return [...prevState, index];
    }
  });
};

export default handleDropDownToggle;
