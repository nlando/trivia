//1. Get Trivia Game to display questions
    //When play button is pressed, run "createTrivia" function
    //DONE
//2. Get answers to display correctly
    //DONE
//3. Allow answer to be selected
    //Create variable for answer
    //DONE
//4. Get "submit" to work
    //Grab selected answer variable
    //Compare it to answer
    //NEED HELP
//5. Get "right/wrong" to work/display
    //If selection === answer, display right
    //Else if selection !== answer, display wrong
//6. Select next question
    //When next question is clicked, call trivia function again
//7. Get "new game" to work
//8. Get landing page to disappear and lead to page


console.log('sanity check');

async function createTrivia(e){
    e.preventDefault();

const url = `https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple`;


const response = await fetch(url);
const data = await response.json();
console.log(data);

$('#question').html(data.results[0].question);
$('#answer1').html(data.results[0].incorrect_answers[0]);
$('#answer2').html(data.results[0].correct_answer);
$('#answer3').html(data.results[0].incorrect_answers[1]);
$('#answer4').html(data.results[0].incorrect_answers[2]);


$('.option').on('click', function(e){
    if (e.target.innerHTML === data.results[0].correct_answer){
        console.log('correct!');
    } else {
        console.log('wrong');
    }
});


};

$('#play-now').on('click', createTrivia);