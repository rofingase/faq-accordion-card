import "./App.css";
import Card from "./components/Card";
import { Data } from "./components/Data";

function App() {
  return (
    <div className="app-container">
      <Card data={Data} />
    </div>
  );
}

export default App;
