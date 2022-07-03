/**
 * The ListItem component is called when we hit the last branch of the json tree stucture.
 * It wraps the key and value pairs wrapped in an <li> tag
 *
 * @param {object} props - destructured prop values passed in
 * @returns {element} li - returns end nodes wrapped in <li> tags
 */
const ListItem = ({ group, display, property, value }) => {
  if (value === "") {
    value = '" "'; // inorder for empty stings in json data show as " " instead of being blank
  } else if (Array.isArray(value) && value.length === 0) {
    value = "[ ]"; // inorder for empty arrays in json data show as [] instead of being blank
  }
  return (
    <li className={display ? group : `hidden ${group}`}>
      <label>
        {property} : {value}
      </label>
    </li>
  );
};

export default ListItem;
