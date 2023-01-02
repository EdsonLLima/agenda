import { useState } from "react";
import agendaLogo from "../public/logo2.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="#" target="_blank">
          <img src={agendaLogo} className="logo agenda" alt="Agenda logo" />
        </a>
      </div>
      <h1>App de Agendamento</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
