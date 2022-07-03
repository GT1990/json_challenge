const ListItem = ({ group, display, property, value, level }) => {
  if (value === "") {
    value = '" "';
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
