/// Fundamentals: variables, order of operations, loops, switch case

let country = "NL";
let continent = "EU";
const isIsland = false;
const language = "dutch";
let population = 15;

console.log("mijn land is " + country + " en mijn continent is " + continent);
console.log(`mijn land is ${country} en mijn continent is ${continent}`);

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof language);

population++;
let populationFinland = 6;
console.log(population > populationFinland);

let averagePopulation = 33;

if (averagePopulation < population) {
  console.log(
    `${country} population is ${population - averagePopulation} above average`
  );
} else {
  console.log(
    `${country} population is ${averagePopulation - population} below average`
  );
}

console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

numNeighbours = Number(prompt(`how many neighbours does your country have?`));

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No border");
}

if (language === "english" && population > 50 && !isIsland) {
  console.log("sarah will live here");
} else {
  console.log("sarah will not live here");
}

const myLanguage = "fdasf";

switch (myLanguage) {
  case "chinese":
  case "mandarin":
    console.log(`MOST number of native speakers!`);
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

console.log(`NL population is ${population >= 33 ? `above` : `below`} average`);
