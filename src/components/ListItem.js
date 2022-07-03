const ListItem = ({ property, value, level }) => {
  return (
    <li className="hidden">
      <label>
        {property} : {value}
      </label>
    </li>
  );
};

export default ListItem;
