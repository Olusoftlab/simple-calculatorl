//we want the user to enter two numbers and the software will add, subtract, divide and multiply non click

const num1=document.getElementById('num-1')
const num2=document.getElementById("num-2")
const addButton=document.getElementById('but-1')
const subButton=document.getElementById('but-2')
const divButton=document.getElementById('but-3')
const mulButton=document.getElementById('but-4')
const resultEl=document.getElementById('result')
const resetEl=document.getElementById('reset')
console.log(resetEl)



let firstNumber=parseInt(prompt("Enter first number: "))
let secondNumber=parseInt(prompt("Enter second number: "))



num1.innerText=firstNumber
num2.innerText=secondNumber


addButton.onclick=()=>{
      addNumbers()
} 


subButton.onclick=()=>{
    subtractNumbers()
}


divButton.onclick=()=>{

    divideNumbers()
}


mulButton.onclick=()=>{

    mulNumbers()
}



resetEl.onclick=()=>{
    resetNumbers()
}




function addNumbers(){

      let sum= firstNumber + secondNumber
      resultEl.innerText=sum
      console.log(resultEl.innerText)
}


function subtractNumbers(){

    if (firstNumber < secondNumber){
       let sub=secondNumber - firstNumber
       resultEl.innerText=sub
       console.log(resultEl.innerText)
    }
    else{
        let sub=firstNumber - secondNumber
        resultEl.innerText=sub
        console.log(resultEl.innerText)
    }

}

function divideNumbers(){

    const divide=firstNumber / secondNumber
    resultEl.innerText=divide
    console.log(resultEl.innertext)
    
}


function mulNumbers(){

    let mul=firstNumber * secondNumber
    resultEl.innerText=mul
    console.log(resultEl.innerText)

}


function resetNumbers(){
     
    num1.innerText=0
    num2.innerText=0
    resultEl.innerText=0

}
