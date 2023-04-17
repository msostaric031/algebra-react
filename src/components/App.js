import "../assets/styles/App.css";
import { imeAplikacije, num1, num2, Oduzimanje } from "./utilities";

function App() {
  const zbroj = num1 + num2;
  const string1 = "prvi string";
  const string2 = "drugi string";
  return (
    <div className="App">
      <h1>React Algebra</h1>
      <p>Neki tekst</p>
      <p>Neki tekst {string1}</p>
      <p>
        Neki tekst {string1} {string2}
      </p>
      <p>
        {imeAplikacije} -- {zbroj} -- {Oduzimanje(10, 2)}
      </p>
    </div>
  );
}

export default App;
