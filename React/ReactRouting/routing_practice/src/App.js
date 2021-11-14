import {Router} from "@reach/router";
import './App.css';
import Home from "./components/Home";
import DisplayWordAndColor from "./components/DisplayWordAndColor";
import DisplayWordAndNumber from "./components/DiaplayWordAndNumbers";
function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <DisplayWordAndNumber path="/:word"/>
        <DisplayWordAndColor path="/:word/:fontColor/:backgroundColor/"/>
      </Router>
    </div>
  );
}

export default App;
