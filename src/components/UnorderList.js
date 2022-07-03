import ListItem from "./ListItem";

function UL({ display, property, node, level }) {
  return (
    <>
      {node && typeof node === "object" ? (
        Object.keys(node).map((property, index) => {
          return (
            <ul key={`${index}${level}`} className={display ? null : `hidden`}>
              {typeof node[property] === "object" ? `${property} :` : null}
              <UL property={property} node={node[property]} level={++level} />
            </ul>
          );
        })
      ) : (
        <ListItem property={property} value={node} level={++level} />
      )}
    </>
  );
}

export default UL;
