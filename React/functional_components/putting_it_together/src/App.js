import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const coolObject = [
    {
      firstName : "Doe",
        lastName : "Jane",
        age : 45,
        hairColor : "Black",
        likes:0
    },
    {
      firstName :"Smith",
        lastName :"John",
        age :88,
        hairColor :"Brown",
        likes:0
    },
    {
      firstName :"Fillmore",
        lastName :"Millard",
        age :50,
        hairColor :"Brown",
        likes:0
    },
    {
      firstName :"Smith",
        lastName :"Maria",
        age :62,
        hairColor :"Brown",
        likes:0
    }
  ];
  return (
    <div className="App">
      {
        coolObject.map((object, index) =>(
          <PersonCard key = {index}
          firstName = {object.firstName}
          lastName = {object.lastName}
          age = {object.age}
          hairColor = {object.hairColor}
          likes = {object.likes}
          />
        )
        )
      }
    </div>
  );
}

export default App;
