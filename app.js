console.log('hello world!');

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  array[i] += 1;
}

const a = [...array];
console.log('a:', a);
