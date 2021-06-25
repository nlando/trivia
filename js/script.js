//1. Get Trivia Game to display questions
    //When play button is pressed, run "createTrivia" function
//2. Get answers to display correctly
//3. Allow answer to be selected
    //Create variable for answer
//4. Get "submit" to work
    //Grab selected answer variable
    //Compare it to answer
//5. Get "right/wrong" to work/display
    //If selection === answer, display right
    //Else if selection !== answer, display wrong
//6. Select next question
    //When next question is clicked, call trivia function again
//7. Get "new game" to work


console.log('sanity check');

async function getWeatherData(e){
e.preventDefault();

const apiKey = 'f31e429a5567d1c28d46897699a0ab05';
const userInput = $('input[type="text"]').val();
const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=imperial`;


const response = await fetch(url);
const data = await response.json();
console.log(data);

}