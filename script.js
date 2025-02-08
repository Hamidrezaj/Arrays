let mystery = [3, 9, 'Darma', 'Karma', 'being'];

let first = mystery[0];
let last = mystery.at(-1);
let middle = mystery.at(Math.floor(mystery.length / 2));

console.log('Array length = ', mystery.length);

mystery.pop();

console.log('poped array = ', mystery);

mystery.push('Consciousness');

console.log('pushed array = ', mystery);

let newMystery = mystery.map((element) => element + 9);

console.log('new Array=', newMystery);

mystery.splice(3);

console.log('spliced =', mystery);

// for loop

for (let entity of newMystery) {
  console.log(entity);
}

// forEach

newMystery.forEach((entity, index) => {
  console.log(`Index ${index}:`, entity);
});

// Destructing

const [one, two, rest] = newMystery;

console.log(one, two, rest);
