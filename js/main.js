// находим переменные по классу
const inputOne = document.querySelector('.inputOne');
const inputTwo = document.querySelector('.inputTwo');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const umnBtn = document.querySelector('.umn');
const delBtn = document.querySelector('.del');
const btnResult = document.querySelector('.btnResult');
const resultEl = document.querySelector('.result');

// переменная которая по умолчанию выбирает математическое действие
// let action = '+';

//создаем функции с действием '+' и вешаем на нее клик
plusBtn.onclick = function () {
  action = '+';
};
//создаем функции с действием '-' и вешаем на нее клик
minusBtn.onclick = function () {
  action = '-';
};
umnBtn.onclick = function () {
  action = '*';
};
delBtn.onclick = function () {
  action = '/';
};
function printResult(result){
  if(result<0){
    resultEl.style.color = 'red'
  }else{
    resultEl.style.color = 'green'
  }

  resultEl.textContent = result
}
// создаем функцию когда мы кликаем на кнопку 'Вычислить'

btnResult.onclick = function () {
  if (action === '+') {
    const sum = Number(inputOne.value) + Number(inputTwo.value);
    printResult(sum)
  } else if (action === '-') {
    const sum = Number(inputOne.value) - Number(inputTwo.value);
    printResult(sum)
  }else if (action === '*') {
    const sum = Number(inputOne.value) * Number(inputTwo.value);
    printResult(sum)
  }else if (action === '/') {
    const sum = Number(inputOne.value) / Number(inputTwo.value);
    printResult(sum)
  }
};
