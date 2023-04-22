/// Ways to write functions ///

/* Declaration */
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

/* Expression */
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

/* Arrow */
const percentageofWorld3 = (population) => (population / 7900) * 100;

const isChina = percentageOfWorld1(1441);
const isNL = percentageOfWorld2(17);
const isBelgium = percentageofWorld3(10);

console.log(isChina);
console.log(isNL);
console.log(isBelgium);

/* function in function */

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld2(population);
  const description = `${country} has ${population} million people, which is about ${percentage} percent of the world.`;
  console.log(description);
};

describePopulation("NL", 17);

/// Arrays ///

const myPopulation = [17, 1441, 10, 12];
console.log(myPopulation.length === 4);

const percentages = [
  percentageOfWorld2(myPopulation[0]),
  percentageOfWorld2(myPopulation[1]),
  percentageOfWorld2(myPopulation[2]),
  percentageOfWorld2(myPopulation[3]),
];

console.log(percentages);

///  Array operations ///

const neighbours = ["GE", "BE"];
console.log(neighbours);
neighbours.push("UT");
console.log(neighbours);
neighbours.shift();
console.log(neighbours);

if (!neighbours.includes("NL")) {
  console.log("probably not nl");
}

neighbours[neighbours.indexOf("BE")] = "GE";

console.log(neighbours);

/// Objects ///

const myCountry = {
  country: "NL",
  capital: "Adam",
  language: "NL",
  population: "16",
  neighbours: ["BE", "GE", "LUX"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countires`
    );
  },
};

console.log(myCountry.describe());

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, and ${myCountry.neighbours.length} neighbouring countries `
);

/* my solution */
myCountry.population = 18;
/* solution jonas */
myCountry.population += 2;

console.log(myCountry.population);
myCountry["population"] = 16;
console.log(myCountry.population);

const Jonas = {
  friends: ["Michael", "Frits", "Nits"],
  firstName: "Jonas",
};

console.log(
  `${Jonas.firstName} has ${Jonas.friends.length} friends and his best friend is called ${Jonas.friends[0]}`
);

/// Loops ///

/* For Loops */

// Print who voted for a total of 50
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

// Loop through the array and print the percentage of the population for each
const thePopulation = [17, 1441, 10, 12];
const percentages2 = [];

for (let i = 0; i < thePopulation.length; i++) {
  percentages2.push((thePopulation[i] / 7900) * 100);
}

console.log(percentages2);

// Loop through the arrays and print the name of each country individually

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
const totalList = [];

for (let i = 0; i < listOfNeighbours.length; i++) {
  console.log(listOfNeighbours[i]);

  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(listOfNeighbours[i][y]);
  }
}

/* while loop */

// Create an array with the percentages of the world in the array populationmaak een array met de percentages van de wereld in de array population
// Use the population function gebruik de population function
// While the length of the percentages array is smaller than the population array --> fill

// same as for loop excercise but with while
const population = [17, 1441, 10, 12];
const percentages3 = [];

let i = 0;
while (population.length > percentages3.length) {
  percentages3.push((population[i] / 7900) * 100);
  i++;
  console.log(percentages3);
}

// solution Jonas: while 1 < population.length :)
