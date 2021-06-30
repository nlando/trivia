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
    //DONE
//5. Get "right/wrong" to work/display
    //If selection === answer, display right
    //Else if selection !== answer, display wrong
    //DONE
//6. Select next question
    //When next question is clicked, call trivia function again
    //DONE
//7. Get landing page to disappear and lead to page
    //DONE
//8. Set up README
//9. Add wireframes
//10. Submit github page

console.log('sanity check');

async function createTrivia(e){
    e.preventDefault();

$('#next').css('display', 'none');
$('.option').css('background-color', '#4766B7');
$('#response').html('');

const url = `https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple`;

const response = await fetch(url);
const data = await response.json();
console.log(data);

$('#question').html(data.results[0].question);
$('#answer1').html(data.results[0].incorrect_answers[0]);
$('#answer2').html(data.results[0].correct_answer);
$('#answer3').html(data.results[0].incorrect_answers[1]);
$('#answer4').html(data.results[0].incorrect_answers[2]);


$('.option').css('display', 'block');


$('.option').on('click', function(e){
    let target = e.target;
    if (target.innerHTML === data.results[0].correct_answer){
        console.log('correct!');
        target.style.backgroundColor = "green";
        $('#next').css('display', 'block');
    } else {
        console.log('wrong');
        target.style.backgroundColor = "crimson";
        target.style.animation = "shake";
    }
});


};

$('#play-now').on('click', createTrivia);
$('#next').on('click', createTrivia);


//MOVE FROM FRONT PAGE TO DATA PAGE
function moveToPage(){
    $('#landing').animate({opacity: '-=1'}, 400, function(){this.remove()});
    $('main').css('display', 'block');   
    };

$('#play-now').on('click', moveToPage);