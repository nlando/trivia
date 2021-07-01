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
    //DONE
//9. Submit github page
    //DONE

console.log('sanity check')

//JQUERY ASSIGN GENRE TO API
let userGenre;
$('#sports').on('click', function(){userGenre = '21'});
$('#history').on('click', function(){userGenre = '23'});
$('#movies').on('click', function(){userGenre = '11'});
$('#music').on('click', function(){userGenre = '12'});


let score = 0;

//PULL IN API DATA
async function createTrivia(e){
    e.preventDefault();

    //ON EVERY SUBMISSION, REVERT PAGE BACK TO STARTING POINT
    $('#next').css('display', 'none');
    $('.option').css('background-color', '#4766B7');
    $('.option').css('display', 'block');

const url = `https://opentdb.com/api.php?amount=20&category=${userGenre}&difficulty=easy&type=multiple`;

const response = await fetch(url);
const data = await response.json();
console.log(data);



//JQUERY ASSIGN DATA TO PIECES OF HTML
for(let i = 0; i<data.results.length; i++){

const wrongAnswer1 = data.results[i].incorrect_answers[0];
const wrongAnswer2 = data.results[i].incorrect_answers[1];
const wrongAnswer3 = data.results[i].incorrect_answers[2];
const rightAnswer = data.results[i].correct_answer;

let answerOptions = [wrongAnswer1, wrongAnswer2, wrongAnswer3, rightAnswer];


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

shuffleArray(answerOptions);

$('#question').html(data.results[i].question);
$('#answer1').html(answerOptions[0]);
$('#answer2').html(answerOptions[1]);
$('#answer3').html(answerOptions[2]);
$('#answer4').html(answerOptions[3]);



//CHANGE COLOR OF ANSWER BASED ON CORRECT/INCORRECT
    $('.option').on('click', function(e){
        
          let target = e.target;
         if (target.innerHTML === data.results[i].correct_answer){
               console.log('correct!');
               target.style.backgroundColor = "green";
               $('#next').css('display', 'block');
               score += 10;
        } else {
            console.log('wrong');
            target.style.backgroundColor = "crimson";
            target.style.animation = "shake";
        }
        $('#score').html(score);
        });
    }

    


};

//BOTH THE "GENRE" AND "NEXT" BUTTONS CALL CREATETRIVIA()
$('#next').on('click', createTrivia);
$('.genre').on('click', createTrivia);


//FUNCTION TO MOVE FROM LANDING PAGE TO GAME PAGE
function moveToTrivia(){
    $('#landing').animate({opacity: '-=1'}, 400, function(){$('#landing').css('display', 'none')});
    $('main').css('display', 'block');   
    };

  
    // this.remove()

//WHEN GENRE BUTTON IS CLICKED, CALL MOVETOPAGE()
$('.genre').on('click', moveToTrivia);


// //FUNCTION TO MOVE FROM GAME PAGE TO LANDING PAGE
// function moveToLanding(){
//         $('main').animate({opacity: '-=1'}, 400, function(){$('main').css('display', 'none')});
//         $('#landing').css('display', 'flex');
// }

// //RETURN TO HOME BUTTON
// $('#back-button').on('click', moveToLanding)