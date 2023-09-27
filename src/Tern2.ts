function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  return (
    a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
}

const arg = Math.floor(Math.random() * 20) + 1;

const IfChecks = (a: number) => {
  let stringResult: string = "";
  if (a > 10) {
    stringResult += "a is bigger than 10";
  } else {
    stringResult += "a is less than or equal to 10";
    if (a === 5) {
      stringResult += " an example of a special case";
    } else {
      stringResult += "";
    }
  }
  if (a === 15) {
    stringResult += " but a is not 15";
  } else {
    stringResult += "";
  }
  if (a > 5) {
    stringResult += " and a is greater than 5";
  } else {
    stringResult += " and a is less than or equal to 5";
  }
  if (a % 2) {
    stringResult += " and a is odd";
  } else {
    stringResult += " and a is even ";
  }
  console.log(stringResult);
};

const SwitchCheck = (a: number) => {
  let stringResult: string = "";
  switch (true) {
    case a > 10:
      stringResult += 'a is bigger than 10';
      break;
    default:
      stringResult += 'a is less than or equal to 10';
  }
  switch (true) {
    case a === 5:
      stringResult += ' an example of a special case';
      break;
    default:
      stringResult += '';
  }
  switch (true) {
    case a === 15:
      stringResult += ' but a is not 15';
      break;
    default:
      stringResult += '';
  }
  switch (true) {
    case a > 5:
      stringResult += ' and a is greater than 5';
      break;
    default:
      stringResult += ' and a is less than or equal to 5';
  }
  switch (true) {
    case a % 2 === 1:
      stringResult += ' and a is odd';
      break;
    default:
      stringResult += ' and a is even';
  }
  
  console.log(stringResult);
};


console.log(arg)
IfChecks(arg);
SwitchCheck(arg)

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()