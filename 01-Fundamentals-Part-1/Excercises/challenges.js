// let massMark = 78;
// let heightMark = 1.69;
// console.log(heightMark);

// let massJohn = 95;
// let heightJohn = 1.88;
// console.log(heightJohn);

// let bmiMark = massMark / heightMark ** 2;
// console.log(bmiMark);
// let checkBmiMark = massMark / (heightMark * heightMark);
// console.log(checkBmiMark);

// const bmiJohn = massJohn / heightJohn ** 2;
// console.log(bmiJohn);
// const checkBmiJohn = massJohn / (heightJohn * heightJohn);
// console.log(checkBmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);
// console.log(typeof markHigherBMI);

// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})👀)`);
// } else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})🎈)`);
// }


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// // const scoreDolphins = 100;
// // const scoreKoalas = 100;

// let scoreDraw = scoreDolphins === scoreKoalas;

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins win`);
// } else if (scoreDolphins < scoreKoalas) {
//     console.log(`Koalas win`);
// } else if (scoreDraw) {
//     console.log(`Draw`);
// }

// if (!scoreDraw && scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins win`);
// } else if (scoreDolphins < scoreKoalas) {
//     console.log(`Koalas win`);
// } else {
//     console.log(`Probably a draw`);
// }

// const scoreDolphinsD2 = (97 + 112 + 101) / 3;
// const scoreKoalasD2 = (109 + 95 + 123) / 3;

// const minimumScore = 100;

// const scoreEnoughDolphins = scoreDolphinsD2 >= 100;
// const scoreEnoughKoalas = scoreKoalasD2 >= 100;


// if (scoreDraw) {
//     console.log(`Tied`);
// } else if  (scoreEnoughDolphins && scoreDolphinsD2 > scoreKoalasD2) {
//     console.log(`Dolphins win with ${scoreDolphinsD2} points`);
// } else if (!scoreEnoughKoalas && scoreDolphinsD2 < scoreKoalasD2) {
//     console.log(`Koalas win with ${scoreKoalasD2}`);
// } else {
//     console.log(`Nobody wins`);
// }

// const scoreKoalasD3 = (109 + 95 + 106) / 3;

// const minimumDolphinPoints = scoreDolphinsD2 >= minimumScore;
// const minimumKoalaPoints = scoreKoalasD3 >= minimumScore;
// const minimumDraw = scoreDolphinsD2 === scoreKoalasD3;


// if (minimumDraw && minimumDolphinPoints && minimumKoalaPoints) {
//     console.log(`Tied olphinpoints ${scoreDolphinsD2} - Koalapoints ${scoreKoalasD3}`);
// } else if  (scoreEnoughDolphins && scoreDolphinsD2 > scoreKoalasD3) {
//     console.log(`Dolphins win with ${scoreDolphinsD2} points`);
// } else if (!scoreEnoughKoalas && scoreDolphinsD2 < scoreKoalasD3) {
    // console.log(`Koalas win with ${scoreKoalasD3}`);
// } else {
//     console.log(`Nobody wins. Dolphinpoints ${scoreDolphinsD2} - Koalapoints ${scoreKoalasD3}`);
// }


// let day = 'asdfdas';

// if (day === 'monday') {
//     console.log('mondaylog');
//     console.log('second monday console log');
// } else if (day === 'tuesday') {
//     console.log('tuesdaylog');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('wednesday or thursday log');
// } else if (day === 'friday') {
//     console.log('fridaylog');
// } else if (day === 'saturday' || day ==='sunday') {
//     console.log('weekend!');
// } else {
//     console.log('what day now?');
// }


// let bill = 1000;

// let tip = bill >= 50 && bill <= 300 ? bill * (15/100) : bill * (20/100);

// console.log(`The bill was ${bill}, he tip was ${tip} and the total value ${bill+tip}`);