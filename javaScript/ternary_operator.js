let myBankAccountBalance = 1000;
const drone = 1001;
let droneOnSale = drone - drone*0.03;
let canAfford = (itemPrice, accountBalance)=>{
    return itemPrice > accountBalance
        ?`Cannot afford! You are $ ${itemPrice - accountBalance} short`
        :"Can afford!";
    }
console.log(canAfford(drone, myBankAccountBalance));
console.log(canAfford(droneOnSale, myBankAccountBalance));
