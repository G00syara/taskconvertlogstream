const IfCase = (a: number) => {
  if (a > 10) {
    if (a > 5) {
      console.log(2 * a + 1);
    } else {
      if (a < 3) {
        if (a % 2 == 0) console.log(6);
        else console.log(7);
      } else {
        if (2 * (a - 2) > 4) console.log(5);
        else {
          if (a % 2 == 0) console.log(6);
          else console.log(7);
        }
      }
    }
  } else {
    if (a * 2 > 5) {
      console.log(2 * a + 1);
    } else {
      if (a < 3) {
        if (a % 2 == 0) console.log(6);
        else console.log(7);
      } else {
        if (2 * (a - 2) > 4) console.log(5);
        else {
          if (a % 2 == 0) console.log(6);
          else console.log(7);
        }
      }
    }
  }
};

const SwitchCase = (a: number) => {
  switch (true) {
    case a > 10:
    case a > 5:
      console.log(2 * a + 1);
      break;
    case a <= 5:
    case a < 3:
    case a % 2 == 0:
      console.log(6);
      break;
    case a % 2 != 0:
      console.log(7);
      break;
    case a >= 3:
    case 2 * (a - 2) > 4:
      console.log(5);
      break;
    case 2 * (a - 2) < 4:
    case a % 2 == 0:
      console.log(6);
      break;
    case a % 2 != 0:
      console.log(7);
      break;
    case a <= 10:
    case a > 5:
      console.log(2 * a + 1);
      break;
    case a <= 5:
    case a < 3:
    case a % 2 == 0:
      console.log(6);
      break;
    case a % 2 != 0:
      console.log(7);
      break;
    case a >= 3:
    case 2 * (a - 2) > 4:
      console.log(5);
      break;
    case 2 * (a - 2) < 4:
    case a % 2 == 0:
      console.log(6);
      break;
    case a % 2 != 0:
      console.log(7);
      break;
    default:
      console.log(7);
  }
};

const a = Math.floor(Math.random() * 100);
console.log(a);
IfCase(a);
SwitchCase(a);

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()