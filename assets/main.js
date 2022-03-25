// 1. Use the id-selector to get your inputs' and the output element from the DOM
// For each input, I'll need to repeat the following.

const inputOne = document.querySelector(`#one`); // this creates a var of the element

const inputTwo = document.querySelector(`#two`);
const inputThree = document.querySelector(`#three`);
const inputFour = document.querySelector(`#four`);
const inputFive = document.querySelector(`#five`);
const inputSix = document.querySelector(`#six`);
const inputSeven = document.querySelector(`#seven`);
const inputEight = document.querySelector(`#eight`);
const inputNine = document.querySelector(`#nine`);
const inputTen = document.querySelector(`#ten`);
const inputEleven = document.querySelector(`#eleven`);
const inputTwelve = document.querySelector(`#twelve`);


const output = document.querySelector(`.output`)

// 3. Generate your template using the values from above and set the output element's value equal to it!
//HINT: You'll need a ton of code before doing anything in this function that's called in your index.html 😜
function generateTemplate() {
  let madlib = `${inputOne.value} lives in a very ${inputTwo.value} city in the middle of nowhere. In the morning when he wakes up he ${inputThree.value} his teeth. He then ${inputFour.value} to his work. When ${inputOne.value} gets to work ${inputFive.value} greets him with a ${inputSix.value} handshake. After the handshake he turns around and runs into a ${inputSeven.value} and ${inputEight.value} out the door out of embarassment. Later that day he ${inputNine.value} back inside to get some work done hoping everyone forgot what happened. He wasn't paying attention and slipped on the ${inputTen.value} which was in the middle of the hallway. Everyone laughed at him and looked at him very ${inputEleven.value}. After a long day of embarassment at work, he walked into a ${inputTwelve.value} and screamed out loud in his misery. `
  output.innerHTML = madlib;

}

console.log(generateTemplate);
