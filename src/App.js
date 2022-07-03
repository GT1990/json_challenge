import UnorderedList from "./components/UnorderList";
import data from "./challenge-data.json";
import "./css/global.css";

function App() {
  console.log(data);

  return data && typeof data === "object" ? (
    Object.keys(data).map((property, index) => {
      const node = data[property];
      return (
        <UnorderedList
          key={index}
          group={index}
          display={true}
          property={property}
          node={node}
          level={1}
        />
      );
    })
  ) : (
    <p>The data needs to be an object</p>
  );
}
export default App;
