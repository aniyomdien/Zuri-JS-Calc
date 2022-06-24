// define operations 
const calculate =(first, second, operator)=>{
    switch(operator){
        case '+':
            return first + second;

        case '-':
            return first - second;

        case '*':
            return first * second;

        case '/':
            return first / second;

        default:
            return 'Invalid operation';
    }
};

// inputs operation
const getinput =() => {
    let firstNumber = prompt('Input first number:');
    let operator = prompt('Input an operator: + or - or * or /');
    let secondNumber = prompt('Input second number:');
    const result = calculate(Number(firstNumber), Number(secondNumber), operator);

    alert(result);
};

// button to refresh operation
const refresh = document.querySelector('.button');
refresh.addEventListener('click',e =>{
    getinput();
});

getinput();