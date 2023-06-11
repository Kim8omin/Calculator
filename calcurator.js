let numOne='';
let operator='';
let numTwo='';

const $operator=document.querySelector('#operator');
const $result=document.querySelector('#result');


//첫번째 숫자 입력부분 (중첩 if문 삭제)
const onClickNumber =(number)=>{
    return (event)=>{
        if (!operator) {
            numOne+=number;
            $result.value+=number;
            return;
        }
        //operator가 있을 떄 실행된다. 
        if (!numTwo) {
                $result.value='';
            }
        numTwo+=number;
        $result.value+=number;
};
};

//연산자 입력 부분
const onClickOperator =(op) => {
    return (event) => {
    if (numOne) {
        operator=op;
        $operator.value=op;
    }else {
        alert('please enter the number first!');
    }
};
};



document.querySelector('#plus').addEventListener('click',onClickOperator('+'));
document.querySelector('#minus').addEventListener('click',onClickOperator('-'));
document.querySelector('#divide').addEventListener('click',onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click',onClickOperator('*'));

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

document.querySelector('#cal').addEventListener('click',()=>{});
document.querySelector('#clear').addEventListener('click',()=>{});
