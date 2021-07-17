const quizData = [
    {
      question: "What does HTML stand for?",
      a: "Hyperlinks and Text Markup Language",
      b: "Home Tool Markup Language",
      c: "Hyper Text Markup Language",
      d:"Home Tool Mark Language",
      correct:"c"
    },
    {
      question: "Who is making the Web standards?",
      a: "Microsoft",
      b: "Google",
      c: "Mozilla",
      d:"The World Wide Web Consortium",
      correct:"d"
    },
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0
loadQuiz()

// View Question Data
function loadQuiz(){
  deselectAnser()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question

  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d

}

function deselectAnser(){
  answerEls.forEach(answerEl=>{
    answerEl.checked = false
  })
}

// user answer data recive
function getSeleted(){
  let answer
  answerEls.forEach(answerEl=>{
    if(answerEl.checked){
    answer = answerEl.id
    }
  })
  return answer;
}


submitBtn.addEventListener('click', ()=>{
  const answer = getSeleted()
  if(answer===quizData[currentQuiz].correct){
    score++
  }
  currentQuiz++
  if(currentQuiz < quizData.length){
    loadQuiz()
  }else{
    quiz.innerHTML = `
    <h2>you answerd ${score}
    /${quizData.length} Questions correctly</h2>
    <button onclick="location.reload()">Reload</button>
    `
  }
})






