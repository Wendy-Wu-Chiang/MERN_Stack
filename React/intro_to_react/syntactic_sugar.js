// Enter Babel
// Babel is a transpiler that will turn JSX into JavaScript that browsers can understand. We can add Babel into our page by using a simple script tag.

// Let's take a look at the difference between JSX and JavaScript.

// Raw JavaScript (React.createElement)
const App = () =>{
    //here we simply created a function that returnss a new React element
    return React.createElement("h1",{},"Our first React page has rendered!!")
};

const App = () => React.createElement("h1",{},"Our first React page has rendered!!")

//then we call the function:
React.DOM.render(App(),document.getElementById("root"));

// Notice the HTML syntax here. Although this may look like regular HTML, it's actually not. 
ReactDOM.render(<h1>Hello!</h1>, document.getElementById("root"));
// **Here is what the Babel translation looks like**
ReactDOM.render(React.createElement("h1", null, "Hello World"), document.getElementById("root"));

// Enter JSX

const App = () => <h1>Our First React page has rendered</h1>;
// Notice The difference in syntax. Here we've created a React Functional Component, named App which looks 
// like regular HTML syntax
ReactDOM.render(<App></App>, document.getElementById("root"));
// Instead of the traditional way we are familiar with firing a function - App() -
// we wrap our function name in an HTML tag instead - <App /> -

// <!--
// Lets look at a normal HTML input tag that is self closed. 
// -->
/* <input .... /> */
// <!-- 
// With JSX, we can do the same thing. So, because our <App></App> tag doesn't wrap anything, we can self close it. 
// -->
<script type="text/babel">
    ReactDOM.render(<App />, document.getElementById('root'));
</script>







