import "./App.css";
import Home from "./components/Home";
import { Count } from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [page, setCount] = useState(false);

  return (
    <div className="App">
      <div>
        {page ? (
          <Count />
        ) : (
          <header className="App-header">
            <Home></Home>
            <button type="button" onClick={() => setCount(true)}>
              Iniciar
            </button>
          </header>
        )}
      </div>
    </div>
  );
}

export default App;
