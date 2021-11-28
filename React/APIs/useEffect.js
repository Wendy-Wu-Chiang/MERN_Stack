// With React hooks, we are able to manage state in normally stateless (functional) components.
// By using something like this:

const [pieceOfState, setPieceOfState] = useState("initial value here");

// A common way useEffect is used is when making a call to an API. For example,
// let's say we are creating an app that will display a list of people in the database.
// We want to make that API call when the component first renders.

const Example = (props) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((response) => setPeople(response.results));
  }, []);

  return (
    <div>
      {people.length > 0 &&
        people.map((person, index) => {
          return <div key={index}>{person.name}</div>;
        })}
    </div>
  );
};
export default Example;

// useEffect takes an optional second argument: an array that contains different variables. 
// This second argument is very powerful, because we can be more specific and tell useEffect exactly when we want it to run. 
// useEffect will always run on first render. It will also run when a variable in the second argument array changes.
//  So, let's look at the following example:

useEffect(()=>{
  alert("When will this run?");
}, [state.isSubmitted]);

// Cleaning Up On Unmounting
// Sometimes, you might have a situation in which you've initiated something inside a useEffect call that is ongoing, 
// such as a setInterval call or a socket connection. When the component is unmounted, 
// as when the user changes to a different route, 
// it is important to clean up so that your application doesn't develop a memory leak. 
// To clean up, you can optionally return a function from your useEffect callback. 
// For example, consider the following code:

// TimeDisplay.js
import React, { useEffect, useState } from 'react';
 
export default () => {
    const [time, setTime] = useState(new Date().toLocaleString());
 
    useEffect(() => {
        const int = setInterval(
            () => setTime(new Date().toLocaleString()),
            1000
        );
 
        return function clearInt() {
            clearInterval(int);
        }
    }, []);
 
    return (
        <div>Current Time: {time}</div>
    );
}
