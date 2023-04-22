/* 
Met use strict starten helemaal in het begin van het doc:
- Doel: om de code veiliger te schrijven. 
- Gaat het op voor alle code eronder.
- Het laat in de console een error message zien waar dat normaal niet gebeurt 
- Het vangt bijvoorbeeld reserved words die in de toekomst in gebruik zullen worden genomen door JS alvast af. 
*/
"use strict";

const calcAverage = (first, second, third) => (first + second + third) / 3;

let avgDolphins = calcAverage(44, 23, 71);
console.log(avgDolphins);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}.`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}.`);
  } else {
    console.log("no winner");
  }
};

checkWinner(avgDolphins, avgKoalas);
checkWinner(100, 1000);

avgDolphins = calcAverage(100, 100, 100);
avgKoalas = calcAverage(200, 200, 200);

checkWinner(avgDolphins, avgKoalas);

// ARRAYS

/* mijn oplossing: */
function calcTip(bill) {
  let tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
  return tip;
}

/* nog kotere oplossing van Jonas */
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
}

console.log(calcTip(10));

let bills = [125, 555, 444];

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log("tips are " + tips);

let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("totals are " + total);
