let first_num = ""; //* перое число
let second_num = "";
let sign = ""; //* знак операции
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/", '+/-', '%'];

const out = document.querySelector(".calc-screen p");

function clearAll() {
  first_num = "";
  second_num = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  //* Нажата кнопка
  if (!event.target.classList.contains("btn")) return;
  //* Нажата кнопка AC
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";

  //* Получаю нажатую кнопку
  const key = event.target.textContent;

  //* Если нажата кнопка 0-9 или .
  if (digit.includes(key)) {
    if (second_num === "" && sign === "") {
      first_num += key;
      out.textContent = first_num;
    } 
    else if (first_num!== "" && second_num!== "" && finish) {
        second_num = key;
        finish = false;
        out.textContent = second_num;
    } 
    else {
      second_num += key;
      out.textContent = second_num;
    }
    console.table(first_num, second_num, sign);
    return;
  }

  //* Если нажата кнопка + - / или *
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.table(first_num, second_num, sign);
    return;
  }

  // function percent() {
  //   let per = first_num / 100 * second_num;
  //   return per;
  // }

  //* Если нажата кнопка =
  if (key === "=") {
    if (second_num === '') second_num = first_num;
    switch (sign) {
      case "+":
        first_num = +first_num + +second_num;
        break;
      case "-":
        first_num = first_num - second_num;
        break;
      case "x":
        first_num = first_num * second_num;
        break;
      case '/':
        if (second_num === '0') {
          out.textContent = 'Ошибка';
          first_num ='';
          second_num = '';
          sign ='';
          return;
        }
        first_num = first_num / second_num;
        break;   
      case '+/-':
        first_num = first_num * -1;
        break;
    }
    finish= true;
    out.textContent=first_num;
    console.table(first_num, second_num, sign, perc);
  }
};
