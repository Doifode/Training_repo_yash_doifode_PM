import { useState } from "react";
import Addition from "./components/Addition";
function App() {
  const [state , setState] = useState(1);
 
  return (
    <div className="App">
      <button onClick={()=>{setState(state +1)}}> Increment</button>
     {state}
     <button onClick={()=>{setState(state -1)}}> Decrement</button>
     <Addition/>

    </div>
  );
}

export default App;
