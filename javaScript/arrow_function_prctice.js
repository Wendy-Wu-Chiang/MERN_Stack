// Before
// var sayHello = function(name){
//     console.log('Hello' + name);
// };
// Now(ES6 arrow functions)
// const sayHello = (name) =>{
//     console.log('Hello ${name}');
// };
// As single parameters don't need parenthesis and with the function 
// body being statement we can remove the curly braces.

// Then(even simpler)
// const sayHello = name =>console.log('Hello ${name}');
// Example of 'implicit returns'
// var square = function(n){
//     return n*n;
// };
// Could be simplified to be:
// const square = n => n * n;

// New example
// const returnObjLonghand = () =>{
//     return{
//         firstName: 'John',
//         lastName: 'Wick'
//     }
// }
// // ES6
// const returnObjFixed = () =>({firstName: 'John', lastName: 'Wick'});

// New example
class Deck{
    constructor(){
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        for (const suit of suits){
            for (const face of faces){
                deck.push(this.createCard(suit, face));
            }
        }
        this.deck = deck;
    }
    createCard(suit, face){
        return face + "of" + suit;
    }
}

// ES6
// class Deck{
//     constructor(){
//         const suits = ['Diamand', 'Heart', 'Spade', 'Club'];
//         const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//         const deck = [];
//         suit.forEach(suit =>{
//             faces.forEach(face =>{
//                 Deck.push(this.createCard(suit, face));
//             });
//         });
//     }
//     createCard(suit, face){
//         return face + "of" +suit;
//     }
// }
