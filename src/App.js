import { useState } from "react";
import Header from "./header";

function App() {
  const [list, setList] = useState([]);
  return (
    <div>
      <Header text="My Project List" />
    </div>
  );
}

export default App;
