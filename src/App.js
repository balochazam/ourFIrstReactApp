import Header from "./header";
import StudentCard from "./studentCard";
import { useState } from "react";
import FormComp from "./formComponent"
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      {/* {list.map((e) => {
        
        return( 
        <div key={e.userId}>
        <img src="https://picsum.photos/200" />
        <h1> {e.username} </h1>
        <h1> {e.lastName} </h1>
        <h1> {e.desc} </h1>
        </div>
      )})} */}
     
       <FormComp />
      </header>
    </div>
  );
}

export default App;
