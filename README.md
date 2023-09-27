# taskconvertlogstream
Чтобы запустить код нужно прописать: 
#### `npm install typescript` Установит пакет Typescript
#### `npx tsc -w` Скомпилирует TS -> JS и создаст папку dist с fileName.js
#### `node dist/Tern1.js` Запустит JS версию задачи №1
#### `node dist/Tern2.js` Запустит JS версию задачи №2
# Задача № 1 
Отформатировать строку кода `(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);`
Используя операторы if...else, switch...case;
# Задача №2
Отформатировать строку кода `a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');`
Используя операторы if...else, switch...case;
