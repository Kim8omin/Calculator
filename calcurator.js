let numOne='';
let operator='';
let numTwo='';

const $operator=document.querySelector('#operator');
const $result=document.querySelector('#result');

const onClickNumber =(number)=>{
    return (event)=>{
        if (operator==='') {
            numOne+=number;
        }else {
            numTwo+=number;
        }
    $result.value+=number;
};
};

function clickPlus () {
    if (numOne) {
        operator=operator+'+'
        $operator.value='+';  
    }else {
        alert('please enter the number first!');
    }
}

function clickMinus () {
    if (numOne) {
        operator=operator+'-'
        $operator.value='-'
    }else {
        alert('please enter the number first!');
    }
}

function clickDivide () {
    if (numOne) {
        operator=operator+'/'
        $operator.value='/'
    }else {
        alert('please enter the number first!');
    }
}

function clickMultiply () {
    if (numOne) {
        operator=operator+'*'
        $operator.value='*'
    }else {
        alert('please enter the number first!');
    }
}

document.querySelector('#plus').addEventListener('click',clickPlus);
document.querySelector('#minus').addEventListener('click',clickMinus);
document.querySelector('#divide').addEventListener('click',clickDivide);
document.querySelector('#multiply').addEventListener('click',clickMultiply);

document.querySelector('#num-9').addEventListener('click',onClickNumber('9'));
document.querySelector('#num-8').addEventListener('click',onClickNumber('8'));
document.querySelector('#num-7').addEventListener('click',onClickNumber('7'));
document.querySelector('#num-6').addEventListener('click',onClickNumber('6'));
document.querySelector('#num-5').addEventListener('click',onClickNumber('5'));
document.querySelector('#num-4').addEventListener('click',onClickNumber('4'));
document.querySelector('#num-3').addEventListener('click',onClickNumber('3'));
document.querySelector('#num-2').addEventListener('click',onClickNumber('2'));
document.querySelector('#num-1').addEventListener('click',onClickNumber('1'));
document.querySelector('#num-0').addEventListener('click',onClickNumber('0'));
