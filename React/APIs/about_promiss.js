// some example code you might write
// const myArray = doSomething();
// doSomethingToMyArray(myArray);
// console.log("This message will wait until the above lines complete")

// -----------------------------------------------------------------------
// An example Promise would look like the following...

const noMondays = new Promise((resolve, reject) => {
  if (new Date().getDay() !== 1) {
    //change he numbers from 1-7, It'll match the days of the week!!  Date().getDate() will get the current day.
    resolve("Good, it's not Saturday!");
  } else {
    reject("Someone has a case of the Saturdays!");
  }
});
noMondays.then((res) => console.log(res)).catch((err) => console.log(err));

// Try changing the day in the above if statement so you get to see both the resolve and the reject code run.
// Where are each of the following handled?
