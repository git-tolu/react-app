import ListGroup from "./components/ListGroup";
import Alert from './components/Alert';
import Button from "./components/Button";
import { MouseEvent, useState } from "react";



function App() {
  let items = ["New York", "Paris", "Tokyo", "belgium"];
  const handleSelectItem = (item: string) => {
    console.log(item)
  };
  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <div>
      {alertVisible &&   <Alert onClose={() => setAlertVisibility(false)} >hello <span>World</span></Alert>}
      <Button onClick={() => setAlertVisibility(true)} color="danger">
        Click Me
      </Button>
      {/* <ListGroup items={items} heading="List"  onSelectItem={handleSelectItem}/> */}
    </div>
  );
}

export default App;
