const saveBtn = document.querySelector("button");
const inputField = document.querySelector("input");
const clrBtn = document.querySelector(".clr");
const resultText = document.querySelector(".resultText");
const showRandNumber = document.querySelector(".showRandNumber");

saveBtn.addEventListener("click", guessNumber);

function guessNumber(){
    const randomNumber = Math.floor(Math.random()*5)+1;
    const userGessNumber = parseInt(inputField.value);
    // console.log(typeof(userGessNumber));

    if(inputField.value==''){
        alert("Please input your guess number");
    } else{

    if(userGessNumber===randomNumber){
        resultText.textContent ="Congratulation!!"
        resultText.style.backgroundColor="green";
        inputField.value = '';
        showRandNumber.textContent="";
        gameOver();
    }else{
        resultText.textContent ="oh No Wrong Idea!!"
        resultText.style.backgroundColor="red";
        inputField.value = '';
        showRandNumber.textContent="Random Number: "+randomNumber;
    }
  }

}

function  gameOver(){
    setTimeout(() => {
        resultText.textContent ="You Win so Toss First";
        resultText.style.backgroundColor="orange";
    }, 2000);
}

clrBtn.addEventListener("click",()=>{
    location.reload();
})
