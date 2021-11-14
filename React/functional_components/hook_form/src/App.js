import React,{useState} from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Display from './components/Display';
function App() {

  const[studentList, setStudentList] = useState([]);
  return (
    <div className="App">
      <UserForm studentList={studentList} setStudentList = {setStudentList}/>
      <Display studentList = {studentList}/>
    </div>
  );
}

export default App;
