// imports
import UnorderedList from "./components/UnorderList";
import data from "./challenge-data.json";
import "./css/global.css";

/**
 * App.js is the main entry point of the application. Importing the JSON data from a local file and passing data through props to the UnordedList component. The data is extracted from the JSON object using Object.keys()
 *
 * @returns {component} UnorderedList - displaying data in <ul> tags
 */
function App() {
  console.log(data); // logging json data for testing purposes
  return (
    <main>
      {data && typeof data === "object" ? (
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
      )}
    </main>
  );
}
export default App;
