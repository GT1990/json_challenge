// imports
import handleDropDownToggle from "./handleDropDownToggle";

/**
 * The Button component takes in informatijon about the group and either removes or adds the group from state using the handleDropDownToggle function.
 *
 * @param {object} props - destructures props passed in from UnorderedList component
 * @returns {element} button - a button that handles onclick functionality
 */
const Button = ({ group, displayState, setDisplayState }) => {
  return (
    <button
      className={displayState.includes(group) ? `rotate ${group}` : group}
      onClick={() => handleDropDownToggle(group, setDisplayState)}
    >
      {">"}
    </button>
  );
};

export default Button;
