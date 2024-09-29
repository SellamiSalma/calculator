let firstNumber='0';
let secondNumber='';
let total='';
let operator='';
let selectedNumber=document.querySelector('.selected-number');
selectedNumber.textContent='0';
let numbers=document.querySelectorAll('.num');
let expression=document.querySelector('.expression');
let operators=document.querySelectorAll('.operator');
let equal=document.querySelector('.equal');
let clear=document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click',function(){
  selectedNumber.textContent=selectedNumber.textContent.slice(0,-1);
  firstNumber=selectedNumber.textContent;
})
clear.addEventListener('click',function(){
  firstNumber='0';
  secondNumber='';
  total='';
  operator='';
  expression.textContent='';
  selectedNumber.textContent='0';
});

operators.forEach(function(op){
  op.addEventListener('click',function(){
    operator=op.textContent;
    expression.textContent=selectedNumber.textContent+operator;
    selectedNumber.textContent='';
  })
})

numbers.forEach(function(num){
  num.addEventListener('click',function(){
    if(firstNumber==='0'){
      selectedNumber.textContent='';
    }
    if(operator===''){
    selectedNumber.textContent+=num.textContent;
    firstNumber=selectedNumber.textContent;
  }
    if(firstNumber!='' && operator!=''){
      selectedNumber.textContent+=num.textContent;
      secondNumber=selectedNumber.textContent;
    }
  })
})
equal.addEventListener('click',function(){
  if((firstNumber!=''||firstNumber=='0' ) && secondNumber!='' && operator!=''){
   expression.textContent+=secondNumber+'=';
   total=operate(operator,firstNumber,secondNumber);
   selectedNumber.textContent=total;
   if(total!=''){
    firstNumber=total;
    secondNumber='';
   }
  }
})



// Adds two numbers and returns the sum.
 function add(a,b){
  return +a + +b ;
}
 
// Subtracts the second number from the first number and returns the result
function subtract(a,b){
  return a-b;
}

// Multiplies two numbers and returns the result
function multiply(a,b){
  return a*b;
} 

// Divides two numbers, returns the quotient. Handles division by zero by returning 'Infinity' or an error message.
function divide(a,b){
  return a/b;
} 

// Takes an operator and 2 numbers and then calls one of the above functions on the numbers
function operate(op,a,b){
  switch(op){
    case '+': return add(a,b);
    case '-': return subtract(a,b);
    case '*': return multiply(a,b);
    case '÷': return divide(a,b);
  }
}

