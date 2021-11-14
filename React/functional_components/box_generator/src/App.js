import React, {useState} from 'react';
import Generator from './components/Generator'
import Display from './components/Display';
import './App.css';

function App() {

  const[boxColorList, setBoxColorList] = useState([]);  //lifting state.

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Generator boxColorList = {boxColorList} setBoxColorList = {setBoxColorList}/>
      <Display boxColorList = {boxColorList}/>
    </div>
  );
}

export default App;
