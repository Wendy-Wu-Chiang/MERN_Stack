// When creating a Functional Component there are a couple things we have to do in order for it to be a valid component. Each component must:

// Import the React library from 'react'
// Have a name starting with a capital letter (ex.  SomeFunctionalComponent)
// Returns a single parent React Element using JSX (The <div> in the following example is the parent React element)
// Exports the component name  (export default SomeFunctionalComponent)
// /
// SomeFunctionalComponent.js
// example:

// import React from 'react';

// const SomeFunctionalComponent = (props) => {
//     return (
//         <div>
//             This is our first class component.
//         </div>;
//     )
// }
// export default SomeFunctionalComponent;

// --------------------------

// PersonCard.js
// import React from 'react';
// const PersonCard = (props) => {
//     return(
//         <div>
//             <h1><font color="#ffffff">Instructor Bob</font></h1>
//             <p>Age: 32</p>
//             <p>Hair Color: purple</p>
//         </div>
//     );
// }
// export default PersonCard;
