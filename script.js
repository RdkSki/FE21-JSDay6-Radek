
var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

// let object1 = {
//     "sandwich": "hamburger",
//     "calories": "260"
// };

let object1 = JSON.parse(sandwiches);

document.getElementById('result').innerHTML = 
`My favorite sandwich is a ${object1.sandwich} which has approximately ${object1.calories} calories, `;

// let object2 = {
//     "fries_size": "Large French Fries",
//     "calories": "570"
// };

let object2 = JSON.parse(fries);

document.getElementById('result').innerHTML += 
`along with it I enjoy eating ${object2.fries_size} which have about ${object2.calories} calories.`;




