
// davaleba1

const Button = document.getElementById('Button');
const Div    = document.getElementById('Div');

Button.addEventListener('click',()=> {
  Div.style.display = 'none';
});

// davaleba2
 const  cardDiv = document.createElement('div');
 cardDiv.setAttribute('id','card');
  
const h2El = document.createElement('h2');
h2El.textContent = 'Gandalf';

const aEl = document.createElement('a');
aEl.setAttribute('href','#');
aEl.textContent = 'Go to profile';

cardDiv.appendChild(h2El);
cardDiv.appendChild(aEl);


document.body.appendChild(cardDiv);

// davaleba3



let score =0

function showQuestion( question,answer, correctAnswerIndex){
    const questionElement = document.querySelectorAll('.question');
    questionElement.textContent = question;

    const answerElements = document.querySelectorAll('.answer');
    answerElements.forEach((element,index) => {
        element.textContent = answer[index];
        element.classList.remove('correct','incorrect')
    });
}

function check(selectedElement) {

    const answerElements = document.querySelectorAll('.answer');
    const selectedAnswerIndex = Array.from(answerElements). indexOf(selectedElement);

    if (selectedAnswerIndex === correctAnswerIndex) {
        selectedElement.classList.add('correct');
        score++;
    }
    else {
        selectedElement.classList.add('incorrect');
    }
    updateScore();
}


function updateScore(){
    const scoreElemet = document.getElementById('sc');
    scoreElemet.textContent = `score: ${score}`;
}

const question = "Which of the following is true about the solution to a system of linear equations?";

const answer   = ["A) The system always has exactly one solution.",
    "B) The system may have no solution, exactly one solution, or infinitely many solutions.",
    "C)The system always has exactly two solutions.",
    "D) The system always has infinitely many solutions."
];
 const correctAnswerIndex =1;

 showQuestion(question,answer,correctAnswerIndex);
 










