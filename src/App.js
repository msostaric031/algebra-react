import "./assets/styles/App.css";
import randomstring from "randomstring";
function App() {
  return (
    <div className="App">
      <p>{randomstring.generate(100)}</p>
    </div>
  );
}

export default App;
