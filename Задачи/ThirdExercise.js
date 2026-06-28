/*
Через slice - отсутупил с конца, так как проще было считать символы.
*/

const text = "На 25 февраля 2021 года стоимость домена в зоне .ru составляет 199 рублей.";
const price = text.slice(-11, -8);  
console.log(price);

/*
Через split + replace
*/
const text = "На 25 февраля 2021 года стоимость домена в зоне .ru составляет 199 рублей.";
const price = text.replace(" рублей.", "").split(" ")[11];
console.log(price);

/*
match
*/
const text = "На 25 февраля 2021 года стоимость домена в зоне .ru составляет 199 рублей.";
const price = text.match(/\d+(?=\sрублей)/)[0];
console.log(price); 