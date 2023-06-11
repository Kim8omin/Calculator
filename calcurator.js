let numOne='';
let operator='';
let numTwo='';

const $operator=document.querySelector('#operator');
const $result=document.querySelector('#result');



document.querySelector('#num-7').addEventListener('click',()=>{
    if (operator==='') {
        numOne +='7'; //누른 숫자를 numOne으로 지정 
    }else {
        numTwo +='7'; //누른 숫자를 numTwo로 지정 
    }
    $result.value+='7';
});
document.querySelector('#num-8').addEventListener('click',()=>{if (operator==='') {
        numOne +='8'; //누른 숫자를 numOne으로 지정 
    }else {
        numTwo +='8'; //누른 숫자를 numTwo로 지정 
    }
    $result.value+='8';
});
document.querySelector('#num-9').addEventListener('click',()=>{if (operator==='') {
        numOne +='9'; //누른 숫자를 numOne으로 지정 
    }else {
        numTwo +='9'; //누른 숫자를 numTwo로 지정 
    }
    $result.value+='9';
});
document.querySelector('#plus').addEventListener('click',()=>{})

document.querySelector('#num-4').addEventListener('click',()=>{if (operator==='') {
        numOne +='4'; //누른 숫자를 numOne으로 지정 
    }else {
        numTwo +='4'; //누른 숫자를 numTwo로 지정 
    }
    $result.value+='4';
});
document.querySelector('#num-5').addEventListener('click',()=>{if (operator==='') {
        numOne +='5'; //누른 숫자를 numOne으로 지정 
    }else {
        numTwo +='5'; //누른 숫자를 numTwo로 지정 
    }
    $result.value+='5';
});
document.querySelector('#num-6').addEventListener('click',()=>{if (operator==='') {
        numOne +='6'; //누른 숫자를 numOne으로 지정 
    }else {
        numTwo +='6'; //누른 숫자를 numTwo로 지정 
    }
    $result.value+='6';
});
document.querySelector('#minus').addEventListener('click',()=>{});

document.querySelector('#num-1').addEventListener('click',()=>{if (operator==='') {
        numOne +='1'; //누른 숫자를 numOne으로 지정 
    }else {
        numTwo +='1'; //누른 숫자를 numTwo로 지정 
    }
    $result.value+='1';
});
document.querySelector('#num-2').addEventListener('click',()=>{if (operator==='') {
        numOne +='2'; //누른 숫자를 numOne으로 지정 
    }else {
        numTwo +='2'; //누른 숫자를 numTwo로 지정 
    }
    $result.value+='2';
});
document.querySelector('#num-3').addEventListener('click',()=>{if (operator==='') {
        numOne +='3'; //누른 숫자를 numOne으로 지정 
    }else {
        numTwo +='3'; //누른 숫자를 numTwo로 지정 
    }
    $result.value+='3';
});
document.querySelector('#devide').addEventListener('click',()=>{});

document.querySelector('#clear').addEventListener('click',()=>{});
document.querySelector('#num-0').addEventListener('click',()=>{if (operator==='') {
        numOne +='0'; //누른 숫자를 numOne으로 지정 
    }else {
        numTwo +='0'; //누른 숫자를 numTwo로 지정 
    }
    $result.value+='0';
});
document.querySelector('#cal').addEventListener('click',()=>{});
document.querySelector('#multiply').addEventListener('click',()=>{});